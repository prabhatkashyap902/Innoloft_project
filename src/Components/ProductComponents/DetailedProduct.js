import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Product_details_url } from '../../Utils'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import MapProduct from './MapProduct'
import YouTube from 'react-youtube';
import { Link, useParams } from 'react-router-dom'
import { Editor } from "react-draft-wysiwyg";
import { EditorState,ContentState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function DetailedProduct() {

	const address=useParams()
	console.log(address.edit==="edit")
	const[btnCheck,setBtnCheck]=useState(false)
	const opts = {
		height: '390',
		width: '640',
		playerVars: {
		  autoplay: 0,
		},
	  };

	const[details,setDetails]=useState({})
	
	const[editDescTitle,setEditDescTitle]=useState(convertToRaw(ContentState.createFromText("")))
	useEffect(()=>{
		axios.get(Product_details_url).then(res=>{
			
			setDetails(res.data)
			setEditDescTitle(convertToRaw(ContentState.createFromText(res.data?.description?.split("</script>")?.[1])))
			// console.log(res.data?.description?.split("</script>")[1])
		})

	},[])

	const handleBtnClick=()=>{
		setBtnCheck(!btnCheck)
	}

	const handleSaveBtn=()=>{

		setBtnCheck(!btnCheck)
		const data={description:editDescTitle}
		axios.put(Product_details_url, data)
        .then(response => {});
		 
	}

	const onEditorStateChange=(e)=>{
		setEditDescTitle(e)
		// console.log(e)
	}
	

  return (
	<div >
		<div className='flex'>{!btnCheck&&
			<Link to={btnCheck?"/product":"/product/edit"} className='ml-auto'>
				
				<button className='ml-auto flex  mb-2 text-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
					onClick={handleBtnClick}
					>Edit
				</button>
				
			</Link>}
		</div>
		<div className='flex bg-white rounded-lg px-10 py-2'>
			<div className='max-w-[80%]'>
				<img alt={details?.id} src={details?.picture}></img>
				<h1 className='font-bold pt-20 pb-5'>Title of this </h1>
				{!btnCheck?<h1 className='font-normal pb-5'>{details?.description?.split("</script>")[1]}</h1>
				:<>
					<Editor
					defaultContentState={editDescTitle}
					
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onContentStateChange={onEditorStateChange}
					className="h-full"
					/>
					<Link to={btnCheck?"/product":"/product/edit"}>
						<button className='ml-auto flex mt-2 mb-2 text-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
						onClick={handleSaveBtn}
						>
							Save
						</button>
					</Link>
					</>
					
				}
				
			</div>
			<div className='bg-gray-200 max-w-6xl w-1 mx-2 my-2'></div>
			<div>
				<MapProduct detail={details}/>
			</div>
		</div>
		<div className='bg-white rounded-lg px-10 py-6 mt-10'>
			<span className='font-bold '>Video</span>
			<span className='flex justify-center text-center pt-10'>
			 <YouTube videoId={details?.video?.split("=")[1]} opts={opts}  />;

			</span>
		</div>
		<div>Offer Details</div>
	</div>
  )
}
