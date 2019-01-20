import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledCardMedia = styled(CardMedia)`
    && {
        height: 160px;
    }
`;

const StyledButton = styled(Button)`
    && {
        float: right;
        background: #8700A7;
        color: #fff;
        &:hover{
            background: #fff;
            color: #8700A7;
        }
    }
`;

const StyledDiv = styled.div`
    margin: 30px;
`;

const StyledDivider = styled(Divider)`
    && {
        margin: 10px 0 10px 0;
    }
`;

const StyledPaper = styled(Paper)`
    && {
        padding: 10px;
        margin: 10px 0 0 0;
        background: #e8e8e8;
    }
`;


function ModaView(props) {
    if (typeof props.item.forecast === 'undefined') {
        props.item.forecast = [];
    }

    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                open={props.open}
                onClose={props.onClose}
            >
                <StyledDiv>
                    <Card>
                        <StyledCardMedia
                            image={window.location.origin + "/assets/" + props.item.globalIdLocal + ".jpg"}
                            title={props.item.local}
                        />
                        <CardContent>
                            <StyledButton variant="contained" size="medium" onClick={props.onClose}>
                                Close
                            </StyledButton>
                            <Typography component="h2" variant="display1" gutterBottom>
                                {props.item.local}
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                                {"Last update: " + props.item.forecastDataUpdate}
                            </Typography>                            
                            <StyledDivider />
                            <Typography variant="caption" gutterBottom align="center">
                                Scroll to see the forecasts for next 5 days.
                            </Typography>
                            <div style={{ maxHeight: 'calc(80vh - 225px)', overflow: 'auto' }}>
                                {props.item.forecast.map((day, index) => (
                                    <StyledPaper key={index} elevation={1}>
                                        <Grid container >
                                            <Grid item xs={12} >
                                                <Typography variant="title" gutterBottom>
                                                    {index === 0 ? 'Today': day.forecastDate}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={4} md={2}>
                                                <Typography variant="overline" gutterBottom>
                                                    Precipitation:
                                                    <Typography variant="subheading" gutterBottom>
                                                        {day.precipitaProb + "% of probability"}
                                                    </Typography>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} sm={2} md={1}>
                                                <Typography variant="overline" gutterBottom>
                                                    Max:
                                                    <Typography variant="subheading" gutterBottom>
                                                        {day.tMax + "º"}
                                                    </Typography>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} sm={6} md={7}>
                                                <Typography variant="overline" gutterBottom>
                                                    Min:
                                                    <Typography variant="subheading" gutterBottom>
                                                        {day.tMin + "º"}
                                                    </Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </StyledPaper>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </StyledDiv>
            </Modal>
        </div>
    )
}
export default ModaView;