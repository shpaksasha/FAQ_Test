import React, {useState} from 'react';
import {Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Tab, Tabs} from "react-bootstrap";

const useStyles = makeStyles(theme => ({
    block: {
        flexGrow: 1,
        backgroundColor: '#eeeeee',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    title: {
        padding: '10px 20px',
        fontWeight: 'bold',
        fontSize: '1.6em'
    },
    text: {
        paddingLeft: '20px'
    },
    one: {
        paddingTop: '35px'
    }
}));

// const One = () => {
//     const classes = useStyles();
//     return (
//         <Container maxWidth='md' fixed component='div'>
//             <Typography className={classes.block}>Лион помешал Роналду продлить голевую серию с начала 2020
//                 года</Typography>
//             <img
//                 src='https://images.beinsports.com/UasrSJwWz94qggM4jc2bSlx_rwc=/full-fit-in/1000x0/cristianoronaldo-cropped_g54p1uylltw18qgkpu8778o2.jpg'
//                 alt='Cristiano Ronaldo'/>
//             <p>Минимальное поражение Ювентуса от Лиона в 1/8 финала Лиги чемпионов прервало голевую серию лидера атаки
//                 «бьянконери» Криштиану Роналду. 35-летний португалец впервые не смог забить в календарном 2020 году.</p>
//             <p>На счету Роналду 9 забитых мячей в 13 матчах с января месяца. В Серии А Криштиану повторил достижение
//                 Габриэля Батистуты и Фабио Куальяреллы, забив в 11 матчах чемпионата подряд.</p>
//             <p>После игры главный тренер Юве Маурицио Сарри раскритиковал решения арбитра, который должен был назначать
//                 как минимум два пенальти в ворота Лиона.</p>
//         </Container>
//     )
// };
//
// export default One;

const One = () => {
    const classes = useStyles();
    const [key, setKey] = useState('home');

    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab eventKey="home" title="Article">
                <Container maxWidth='md' component='div' fixed className={classes.block}>
                    <Typography className={classes.title}>Лион помешал Роналду продлить голевую серию с начала 2020
                        года</Typography>
                    <img width='960px'
                         src='https://images.beinsports.com/UasrSJwWz94qggM4jc2bSlx_rwc=/full-fit-in/1000x0/cristianoronaldo-cropped_g54p1uylltw18qgkpu8778o2.jpg'
                         alt='Cristiano Ronaldo'/>
                    <Typography className={classes.text}>
                        <p className={classes.one}>Минимальное поражение Ювентуса от Лиона в 1/8 финала Лиги чемпионов
                            прервало голевую серию лидера атаки
                            «бьянконери» Криштиану Роналду. 35-летний португалец впервые не смог забить в календарном
                            2020 году.</p>
                        <p>На счету Роналду 9 забитых мячей в 13 матчах с января месяца. В Серии А Криштиану повторил
                            достижение
                            Габриэля Батистуты и Фабио Куальяреллы, забив в 11 матчах чемпионата подряд.</p>
                        <p>После игры главный тренер Юве Маурицио Сарри раскритиковал решения арбитра, который должен
                            был назначать
                            как минимум два пенальти в ворота Лиона.</p>
                    </Typography>
                </Container>
            </Tab>
            <Tab eventKey="profile" title="Formatting">

            </Tab>
        </Tabs>
    );
};

export default One;