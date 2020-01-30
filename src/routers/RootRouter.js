import React, { Component, Fragment, useContext, useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Tag from '../components/Tags';
import Header from '../components/Header';
import Post from '../components/Post';
import NoMatch from '../components/Post/NoMatch';
import StockContext from '../context/StockContext';

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
                        <select value={sector} onChange={handlingSector}>
                        <option value="" disabled selected hidden>업종구분</option>
                        <option value="금융업">금융업</option>
                        <option value="운수창고">운수창고</option>
                        <option value="보험업">보험업</option>
                        {/* <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option> */}
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