import React, { Component, Fragment, useContext, useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Tag from '../components/Tags';
import Header from '../components/Header';
import Post from '../components/Post';
import NoMatch from '../components/Post/NoMatch';
import StockContext from '../context/StockContext';
import './router.css';

const App_main = {
    width: '70%',
    margin: 'auto',
  };
const formStyle = {
    position: 'fixed',
    marginLeft: '-160px',
}

function RootRouter() {
    const stockContext = useContext(StockContext);
    const [keyword, setKeyword] = useState('');
    const [sector, setSector] = useState('');
    const handlingChange = (e) => {
        setKeyword(e.target.value)
      };
    const handlingSector = (e) => {
        console.log(e.target.value)
        setSector(e.target.value)
        window.open('/search/'+e.target.value, '_self')
    }

    const [sectors, setSectors] = useState([])

    fetch('http://54.180.87.156:5000/sectors')
      .then(res => res.json())
      .then(res => setSectors(res))
      .catch(error => {
        console.log('error: ', error);
    });
    return(
        // stockContext.stockData
        <Fragment>
                <div>
                    <Header />
                </div>
                <Switch>
                <Route exact path='/'>
                    <Fragment>
                <div>
                    <div className = "App_main" style = { App_main }>
                    <div><h2>.</h2></div><div><h1>.</h1></div>
                    <div style = { formStyle }>
                        <input value={keyword} name={'keyword'} placeholder="Search"
                                onChange={handlingChange}>
                        </input>
                        <br>
                        </br>
                        <select className='select-css' value={sector} onChange={handlingSector}>
                        <option value="" disabled selected hidden>업종구분</option>
                            { sectors.map(sector => <option value={sector}>{ sector }</option>)}
                        </select>
                        <select className='select-css' value={sector} onChange={handlingSector}>
                        <option value="" disabled selected hidden>변동추이</option>
                            <option value='상승세'>상승세</option>
                            <option value='하락세'>하락세</option>
                            <option value='변동폭낮음'>변동폭낮음</option>
                        </select>

                        
                    </div>

                    <Post dataInformation={stockContext.stockData.filter(data => {
                        // return data.nickname.indexOf(this.state.keyword) > -1
                        return data.stock_name.toLowerCase().includes(keyword.toLowerCase())
                            // data.stock_sector.toLowerCase().includes(keyword.toLowerCase())
                        // case-insensitive method
                    })}/>
                    </div>
                </div>
                    {/* <PostsForm /> */}
                    {/* <Posts /> */}
                </Fragment>
                </Route>
                <Route path='/search/:tag' component={Tag} />
                <Route component={ NoMatch }/>
            </Switch>
        </Fragment>
    )
}

export default RootRouter;