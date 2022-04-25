import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { MdFitScreen, MdOutlineFitScreen, MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { AiOutlineBgColors, AiOutlineInstagram } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import VolumeSlider from "./Slider"


const ResizeEditPage = () => {
    const { videolink } = useSelector((state) => state.VideoReducer);
    const [count, setCount] = useState(0)

    const [slider, setSlider] = useState({
        max: 100,
        min: 0,
        value: 0,
        label: ''
    });

    console.log(count)
    const Decrement = () => {
        setCount(count - 1)
    }
    const Increment = () => {
        setCount(count + 1)
    }
    // const rangeSlide = (value) => {
    //     document.getElementById('rangeValue').innerHTML = value;
    // }
    const handleOnChange = () => {
        setCount({ value: count })
    }
    // const changeValue = (e) => {
    //     console.log(e.target.value)
    //     const select = document.getElementById("demo").innerHTML = `<select name="cars" id="cars" className="select_design"><option  value="Instagram">Instagram</option><option value="Facebook">Facebook</option><option value="Youtube">Youtube</option><option value="Vimeo">Vimeo</option></select>`
    //     const selec1 = document.getElementById("demo1").innerHTML = `<select name="cars" id="cars" className="select_design"><option  value="Feed LandScape">Feed LandScape</option><option value="Portrait">Portrait</option></select>`
    //     // const mySelect = document.getElementById("demo")
    //     // let newoption = document.createElement("select")
    //     // const select = mySelect.appendChild(newoption)
    //     // const socialList = ["Instagram", "Facebook", "Youtube"]
    //     // for (let social of socialList) {
    //     //     let newOptionItem = document.createElement("option")
    //     //     newOptionItem.innerText = social
    //     //     select.appendChild(newOptionItem)
    //     // }
    //     console.log(select)

    // }
    // const changeValue2 = (e) => {
    //     console.log(e.target.value)
    //     const select = document.getElementById("demo").innerHTML = `<select name="cars" id="cars"><option value="Aspect Ratio 16:9">Aspect Ratio 16:9</option><option value="Aspect Ratio 4:3">Aspect Ratio 4:3</option><option value="Aspect Ratio 21:9">Aspect Ratio 21:9</option><option value="audi">Aspect Ratio 16:9</option></select>`
    //     const selec1 = document.getElementById("demo1").innerHTML = `<select name="cars" id="cars" className="select_design"><option  value="Feed LandScape">Feed LandScape</option><option value="Portrait">Portrait</option></select>`

    //     // const mySelect = document.getElementById("demo")
    //     // let newoption = document.createElement("select")
    //     // const select = mySelect.appendChild(newoption)
    //     // const socialList = ["vimeo", "Facebook", "Youtube"]
    //     // for (let social of socialList) {
    //     //     let newOptionItem = document.createElement("option")
    //     //     newOptionItem.innerText = social
    //     //     select.appendChild(newOptionItem)
    //     // }
    //     console.log(select)
    // }
    const data = localStorage.getItem("myvideo")

    return (<>
        <div className="editpage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-md-6 col-sm-12 editpage_1" >
                        <div className="resize">
                            <ReactPlayer url={data} loop={true} width="100%" height="100%" controls={true} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 editpage_2" >
                        <div className="slider">
                            <div>
                                <div className="ratioBtn">
                                    <div>

                                        <label htmlFor="present" className="label">Preset</label>
                                        <input type="radio" name="selectMode" id="preset" value="preset" />
                                    </div>
                                    <div>

                                        <label htmlFor="custom" className="label">Custom</label>
                                        <input type="radio" name="selectMode" id="preset" value="custom" />
                                    </div>
                                </div>
                                <div>
                                    <p id="demo">
                                        <select name="cars" id="cars">
                                            <option value="Aspect Ratio 16:9">Instagram</option>
                                            <option value="Aspect Ratio 4:3">Facebook</option>
                                            <option value="Aspect Ratio 21:9">YouTube</option>
                                            <option value="Twitter">Twitter</option>
                                            <option value="SnapChat">SnapChat</option>
                                            <option value="Linked In">Linked In</option>
                                        </select>
                                    </p>
                                    <p id="demo1">
                                        <select name="cars" id="cars"><option value="Aspect Ratio 16:9">Aspect Ratio 16:9</option><option value="Aspect Ratio 4:3">Aspect Ratio 4:3</option><option value="Aspect Ratio 21:9">Aspect Ratio 21:9</option><option value="audi">Aspect Ratio 16:9</option></select>
                                    </p>

                                </div>
                            </div>
                            <div>
                                <div className="slider_1">
                                    <button><MdFitScreen /> Fit</button>
                                    <button><MdOutlineFitScreen /> Fill</button>
                                </div>
                                <div className="slider_2">


                                    <div className="slider_a">




                                        {/* <span onClick={Decrement} className="span__color"><MdOutlineRemove /> </span>
                                        <span className="span__border">{count} %</span>
                                        <span onClick={Increment} className="span__color" ><MdOutlineAdd /> </span> */}

                                        {/* <input className="range" type="range" value="0" min="0" max="1000" onChange={rangeSlide(this.value)} onMouseMove={rangeSlide(this.value)} /> */}
                                    </div>
                                    {/* <div className="slider_b">
                                        <span>< AiOutlineBgColors className="color__icon" /></span>
                                    </div> */}

                                </div>
                                <VolumeSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="last__div">
                <button>Export</button>
            </div>
        </div>
    </>);
}

export default ResizeEditPage;