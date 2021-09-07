import axios from "axios";

const fetchRandomData=()=>{
    return axios.get('http://ti-react-test.herokuapp.com/users')

}
export default fetchRandomData;
