import React,{Component} from "react";
import AppLayout from "../core/AppLayout";
import { Web3Storage } from "web3.storage";
import dotenv from "dotenv";
import PopupConfirmAddLand from "../components/PopupConfirmAddLand";
import Landder from "../landder";
import web3 from "../web3";
import land_smart_contract from "../land";

dotenv.config();

const web3_storage_client = new Web3Storage({token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBiNTlBMTg4NzdmYmRlMjhlZjUzNUJlQTg1MzBGMjlDYmFDMkY1QzAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTE5MzM2MTA3NzMsIm5hbWUiOiJMYW5kZGVyIn0.3SUnQTcmfyQOasd8MbJJ3BdF6uc86n8EZrZLso4FkBY" });

export default class AddLand extends Component{
    state = {
        latitude : "",
        longitude : "",
        document_url : "",
        file_content : ""
    };

    setLatitudeLongitude = (val) => {
        console.log(val);
    }

    land = null;

    addLand = async() => {
        //alert( `Latitude ${this.state.latitude} et longitude ${this.state.longitude}`);
        /*if(this.state.file_content){
            try{
                const res = await web3_storage_client.put(this.state.file_content);
                this.setState({'document_url':res});
                console.log(`File submitted successfully to the address ${res}`);
            }catch(ex){
                console.log(ex);
            }            
        }else{
            alert("The file is not set yet");
        }*/

        const [land_addr] = await Landder.methods.createLand().send({
            from : localStorage.user_addr,
            gas : '1000000',
            value : web3.utils.toWei('0.01','ether')
        });

        this.land = await land_smart_contract(land_addr);
        
        console.log(land_addr);
    }

    addCoordinates = async() => {
        console.log(Landder);
        const lands = await Landder.methods.getDeployedLands().call();
        console.log(lands);
    }

    fileChanged = (evt) => {
        if (evt.target.files && evt.target.files[0]) {
            //this.state.file_content = evt.target.files[0];
            this.setState({file_content: evt.target.files});
            /*let reader = new FileReader();
            reader.onload = (e) => {
                //console.log(e.target.result);
                this.setState({file_content: e.target.result});
            };
            reader.readAsDataURL(evt.target.files[0]);*/
        }
    }

    render(){
        return (
            <>
                <AppLayout>
                <header classname="bg-white">
                    <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Add new land</h1>
                    </div>
                </header>
                <main>
                    {/* <PopupConfirmAddLand open_popup={true}/> */}
                    
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px">
                        <div className="md:grid md:grid-cols-1 md:gap-5">
                                <label class="block text-sm font-medium text-gray-700">Start land registration to get its address</label>
                                <div className="mt-3">
                                    <button onClick={this.addLand} className="bg-blue-500 p-3 text-white hover:bg-blue-400 rounded">Pay 0.01 ETH to proceed</button>
                                </div>
                        </div>

                        <div class="mb-5">

                        </div>

                        <div className="mb-5">
                                        <label className="block text-sm font-medium text-gray-700">Add the legal document</label>
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
                                                <input onChange={this.fileChanged} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                        </div>
                                        {this.state.document_url ? <div>File submitted to IPFS at address <a href={"https://" + this.state.document_url + ".ipfs.dweb.link"}>{this.state.document_url}</a></div> : <div></div>} 
                            </div>
                            <div className="md:grid md:grid-cols-1 md:gap-10">
                                <div className="">
                                    <button onClick={this.addLand} className="bg-blue-500 p-3 text-white hover:bg-blue-400 rounded">Save my land</button>
                                </div>
                            </div>

                            <div className="mt-9">
                                <h4 className="text-xl font-bold">Corners coordonates</h4>
                                <div className="mb-3 mt-3">
                                    <div>Latitude</div>
                                    <input onChange={evt => {this.setState({'longitude': evt.target.value})}} type="number" className="border-gray-300 rounded w-full"/>
                                </div>

                                <div className="mb-3">
                                    <div>Longitude</div>
                                    <input onChange={(event) => {this.setState({'latitude' : event.target.value})}} type="number" className="border-gray-300 rounded w-full"/>
                                </div>
                            </div>


                            <div className="md:grid md:grid-cols-1 md:gap-10">
                                <div className="">
                                    <button onClick={this.addCoordinates} className="bg-blue-500 p-3 text-white hover:bg-blue-400 rounded">Add coordonates</button>
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
                
            </>
            
        );
    }
}

