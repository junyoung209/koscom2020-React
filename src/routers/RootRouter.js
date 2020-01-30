import React, { Component, Fragment, useContext, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
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
    const handlingChange = (e) => {
        setKeyword(e.target.value)
      };

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
                    </div>

                    <Post dataInformation={stockContext.stockData.filter(data => {
                        // return data.nickname.indexOf(this.state.keyword) > -1
                        return data.stock_name.toLowerCase().includes(keyword.toLowerCase())
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