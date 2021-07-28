/*
 * @Author: sunfangyuan
 * @Date: 2021-07-16 16:50:38
 * @LastEditors: sunfangyuan
 * @LastEditTime: 2021-07-19 17:48:00
 * @Description: 暂无描述
 */
import {useState} from 'react';
const styleMapping = {
    'primary':{
        marginLeft:"10px",
        color: "#fff",
        backgroundColor: "#409eff",
        borderColor: "#409eff",
        padding: "12px 20px",
        fontSize: '14px',
        borderRadius: '4px',
        outline:"none",
        border:"1px solid #dcdfe6",
        cursor:"pointer"
    },
    'warning':{
        marginLeft:"10px",
        color: "#fff",
        backgroundColor: "#e6a23c",
        borderColor: "#e6a23c",
        padding: "12px 20px",
        fontSize: '14px',
        borderRadius: '4px',
        outline:"none",
        border:"1px solid #dcdfe6",
        cursor:"pointer"

    }
}

export default ()=>{
    const [text] = useState('remote');
    return <button style={styleMapping['primary']} onClick={()=>alert('I come from Remote')}>{ text } Button</button>
}