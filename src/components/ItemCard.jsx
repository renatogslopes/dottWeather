import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const StyledCardMedia = styled(CardMedia)`
  && {
    height: 140px;
    }
`;

const StyledDiv = styled.div`
    margin: 10px;
`;


function ItemCard(props) {
    return (
        <StyledDiv>
            <Card>
                <CardActionArea>
                    <StyledCardMedia
                        image={window.location.origin+"/assets/"+props.globalID+".jpg" } 
                        title={props.name}
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                        {props.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </StyledDiv>
    )
}
export default ItemCard;