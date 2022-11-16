import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const WritePost = styled.div    `
padding: 20px 0 60px 0;
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
border-bottom: 1px solid rgb(58 64 71 / 8%);
`

export const Write = () => {
    const [value, setValue] = useState('');

    console.log(value)

  return (
    <>
    <WritePost className="write_post">
        <div className="container">
            <div className="row">
                <div className="col-xl-8">
                    <div className="write-post">
                        <input type="text" className='form-control' placeholder=' Title'/>
                        <div className="text_editor">
                        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="post-menu">
                        <div className="item">
                            <h1>Public</h1>
                            <span>Status: <b>Draft</b></span>
                            <span>Visivilty: <b>Public</b></span>
                            <input className='d-none' type="file" id="file"/>
                            <label htmlFor='file' className='form-control-file files'>Upload Image</label>
                            <div className="buttons py-2">
                                <button className="btn btn-secondary">Save As a Draft</button>
                                <button className="btn btn-success ">Update</button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="cat">
                            <input type="radio" name="cat" value="art" id="art"/>
                            <label htmlFor='art'>Art</label>
                            </div>
                            <div className="cat">
                            <input type="radio" name="cat" value="technology" id="technology"/>
                            <label htmlFor='technology'>Technology</label>
                            </div>
                            <div className="cat">
                            <input type="radio" name="cat" value="design" id="design"/>
                            <label htmlFor='design'>Design</label>
                            </div>
                            <div className="cat">
                            <input type="radio" name="cat" value="science" id="science"/>
                            <label htmlFor='science'>Science</label>
                            </div>
                            <div className="cat">
                            <input type="radio" name="cat" value="development" id="development"/>
                            <label htmlFor='development'>Development</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </WritePost>
    </>
  )
}
