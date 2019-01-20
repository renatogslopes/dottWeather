import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const StyledTypography = styled(Typography)`
    && {
        padding: 0 30px;
        color: #fff; 
    }
`;

const StyledAppBar = styled(AppBar)`
    && {
        background-color: #8700A7;
        padding: 10px;
    }
`;

const StyledTextField = styled(TextField)`
    && {
        label{
            color: #fff;
        }
        div{
            color: #fff;
            fieldset{
                border-color: #fff;
            }
        }
    }
`;


function NavBar(props) {
    return (
        <div>
            <StyledAppBar position="static">
                <Toolbar>
                    <StyledTypography variant="title">
                        .Weather
                    </StyledTypography>
                    <StyledTextField
                        label="Search district.."
                        type="text"
                        variant="outlined"
                        onChange={props.onChangeSearch}                        
                    />
                </Toolbar>
            </StyledAppBar>
        </div>
    )
}
export default NavBar;