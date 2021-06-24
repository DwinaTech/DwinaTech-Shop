import { FormControl, Select, MenuItem } from "@material-ui/core";
import './style.css'

const SelectCategory = () => {
    const age = 0
    const handleChange = () => { }
    return <FormControl className="formControl">
        <Select
            value={age}
            onChange={handleChange}
        >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
}

export default SelectCategory;