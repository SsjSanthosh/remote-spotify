import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { transferUserPlayback } from 'Redux/User/actions';
import { GET_USER_DEVICES } from 'utils/endpoints';
import { getDataFromEndpoint } from 'utils/utils';
import './style.scss'
function Devices({transferUserPlayback,player}) {
    const [devices, setDevices] = useState([])
    useEffect(()=>{
        getDataFromEndpoint(GET_USER_DEVICES).then(res=>setDevices(res.data.devices))
    },[player])
    return (
       devices && <div className="user-devices">
           {devices.map((device)=>{
               return <p className={`user-device ${device.is_active && `accent-color`} hover-item cursor-pointer`} key={device.id}  onClick={()=>transferUserPlayback(device.id)}>{device.name}</p>
           })}
       </div>
    )
}

const mapStateToProps = ({user})=>{
    return {player:user.player}
}
export default connect(mapStateToProps,{transferUserPlayback})(Devices);
