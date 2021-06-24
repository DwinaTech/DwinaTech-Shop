import { Paper, IconButton, Container, InputBase } from "@material-ui/core";
import { Search } from '@material-ui/icons';
import SelectCategory from './SelectCategory';
import './style.css'

const FilterProduct = () => (
    <div className="filter-bar">
        <Container>
            <Paper component="form" className="root">
                <SelectCategory />
                <InputBase
                    className="input"
                    placeholder="Search for a product"
                    inputProps={{ 'aria-label': 'Search for a product' }}
                />
                <IconButton type="submit" aria-label="search">
                    <Search />
                </IconButton>
            </Paper>
            );

        </Container>
    </div>
);

export default FilterProduct;
