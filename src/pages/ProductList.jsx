import styled from "styled-components";
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Title = styled.div`
    margin: 20px;
    ${mobile({fontSize: "30px"})}
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between;
    
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({display: "flex",flexDirection: "column",margin: "0px 20px"})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600px;
    margin-right:20px;
    ${mobile({fontSize: "20px"})}
`;

const Select = styled.select`
    padding: 10px;
    font-weight: 600;
    margin-right:20px;
    ${mobile({ margin: "10px 0px"})}
`;

const Option = styled.option`
    ${mobile({height: "20px"})}
`;

const ProductList = () => {
    return(
        <Container>
            <Announcement/>
            <Title>Your Dressing Room</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Price
                        </Option>
                        <Option>Low to High</Option>
                        <Option>High to Low</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;