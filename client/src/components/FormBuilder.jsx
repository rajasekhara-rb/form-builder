import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FormBuilder(props) {
    const [isEditing, setIsEditing] = useState({
        formBanner: false,
        formName: false,
        formDescription: false,
    });
    // console.log(isEditing)
    const [formData, setFormData] = useState({
        formBanner: "https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/white-wooden-header.jpg?ssl=1",
        formName: "Unit Test 1",
        formDescription: "This is a sample form for tesing purpose kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        formElements: []
    });

    useEffect(() => {
        const getFormData = async () => {
            await axios.get("http://localhost:5050/form/6547af04d50a20ad6a3b59ae")
            .then((res) => {
                setFormData(res.data.form);
            })
        }

        getFormData()
    },[0])


    const handleEditing = (e) => {
        const { name } = e.target;
        setIsEditing({ ...isEditing, [name]: isEditing[name] ? false : true })
    }

    const handleEnterKey = (e) => {
        if (e.keyCode !== 13) {
            return
        } else {
            handleEditing(e)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
            <div className='flex flex-cols w-100'>
                <div className="w-1/6 px-5 py-10">Avibalbel sections</div>
                <div className='w-4/6 px-5 py-10' >
                    <div className='w-100'>
                        <img class="h-auto max-w-full" src={formData.formBanner} alt="image description" />
                        {isEditing.formName ? (
                            <div class="mb-6">

                                <input
                                    onChange={handleChange}
                                    // onMouseOut={handleEditing}
                                    onKeyDown={(e) => {
                                        handleEnterKey(e)
                                    }}
                                    value={formData.formName}
                                    type="text"
                                    id="formName"
                                    name='formName'
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" required />

                            </div>
                        ) : (
                            <h2 class="text-4xl font-extrabold dark:text-white"
                                onClick={() => {
                                    setIsEditing({ ...isEditing, formName: true })
                                }}
                            >{formData.formName}</h2>
                        )}

                        {isEditing.formDescription ? (
                            <div class="mb-6">
                                <textarea
                                    onChange={handleChange}
                                    // onMouseOut={handleEditing}
                                    onKeyDown={(e) => {
                                        handleEnterKey(e)
                                    }}
                                    value={formData.formDescription}
                                    type="textarea"
                                    id="formDescription"
                                    name='formDescription'
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" required />
                            </div>
                        ) : (
                            <p
                                // name="formDescription"
                                onClick={() => {
                                    setIsEditing({ ...isEditing, formDescription: true })
                                }}
                                class="my-4 text-lg text-gray-500">{formData.formDescription}</p>
                        )}

                        {/* <div class="mb-6">

                        <input
                            onChange={handleChange}
                            // onDoubleClick={() => {
                            // setIsEditing(!isEditing)
                            // }}
                            onDoubleClick={handleEditing}
                            disabled={isEditing.formDescription === true? (false) : (true)}
                            value={formData.formDescription}
                            type="text"
                            id="formDescription"
                            name='formDescription'
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required />

                    </div> */}
                    </div>
                    <hr></hr>
                    <div>
                        Form Elements
                    </div>

                </div>
                <div className='w-1/6 px-5 py-10'>
                    Settings
                    <div class="w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <button
                            onClick={() => {
                                setIsEditing({ ...isEditing, formBanner: true })
                            }}
                            type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                            </svg>
                            Choose Banner Photo
                        </button>

                        {isEditing.formBanner ? (
                            <input
                                onChange={handleChange}
                                // onMouseOut={handleEditing}
                                onKeyDown={(e) => {
                                    handleEnterKey(e)
                                }}
                                value={formData.formBanner}
                                type="url"
                                id="formBanner"
                                name='formBanner'
                                class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                placeholder="" required />
                        ) : ("")
                        }
                        {/* <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                            </svg>
                            Settings
                        </button>
                        <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                            </svg>
                            Download
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormBuilder;