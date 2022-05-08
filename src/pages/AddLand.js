import React,{Component} from "react";
import AppLayout from "../core/AppLayout";

export default class AddLand extends Component{
    render(){
        return (
            <AppLayout>
                <header classname="bg-white">
                    <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Add new land</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px">
                        <div className="mb-5">
                                        <label className="block text-sm font-medium text-gray-700">Legal document</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload one file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                        </div>
                            </div>
                            <div className="mt-9">
                                <h4 className="text-xl font-bold">Corners coordonates</h4>
                                <div className="mb-3 mt-3">
                                    <div>Latitude</div>
                                    <input type="number" className="border-gray-300 rounded w-full"/>
                                </div>

                                <div className="mb-3">
                                    <div>Longitude</div>
                                    <input type="number" className="border-gray-300 rounded w-full"/>
                                </div>
                            </div>


                            <div className="md:grid md:grid-cols-1 md:gap-10">
                                <div className="">
                                    <button className="bg-blue-500 p-3 text-white hover:bg-blue-400 rounded">Add coordonates</button>
                                </div>
                            </div>

                        </div>
                    </main>

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                
            </AppLayout>
        );
    }
}

