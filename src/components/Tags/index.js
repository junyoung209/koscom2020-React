import React, { Fragment, Component, useContext } from 'react';
import Post from '../Post';
import List from '../List';
import './tag.css';
import StockContext from '../../context/StockContext';

function Tag(props) {
    const stockContext = useContext(StockContext);
    
    return (
        <Fragment>
                <h2>Hi</h2><h2>Hi</h2>
            <div className="container">
                <h2 className="tag">#{ props.match.params.tag }</h2>
            <div className="exBody">
                { props.match.params.tag === '상승세' || props.match.params.tag === '하락세' || props.match.params.tag === '변동폭낮음' ? 
                <List dataInformation={stockContext.stockData.filter(data => {
                    return data.delta.includes(props.match.params.tag)})}/> :
                    <List dataInformation={stockContext.stockData.filter(data => {
                        return data.stock_sector.includes(props.match.params.tag)})}/>}
                {/* <List dataInformation={stockContext.stockData.filter(data => {
                            return data.stock_sector.includes(props.match.params.tag)})}/> */}

            </div>
            </div>
            </Fragment>
    )
}

// class Tag extends Component {
    // state = {
    //     info: [
    //         {
    //           'nickname': 'SK_innovation',
    //           'avatar': "https://scontent-icn1-1.cdninstagram.com/v/t51.2885-15/e35/62070766_160970358273755_19491260427704391_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=5yEATzRS1KQAX9UVci_&oh=14e6bb7883649b9a0f38549025536f6e&oe=5ED8CE93",
    //           'caption': "Hi. I\'m SK",
    //           'image': "https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzQ1MzM5OTk2.LP7bL00QwBJSXPDj2DhefWhkXDMHyE9_GHas5mdFZqkg._jSmUVlSfhVvh0ohxUInt_qd6uM1o-RXniNGsr8aJ84g.PNG/000210.png?type=w740",
    //           'industry': "화학",
    //         },
    //         {
    //           'nickname': 'Samsung',
    //           'avatar': "https://thumbs.dreamstime.com/b/good-morning-sign-board-arrow-good-morning-sign-board-arrow-beach-sunshine-background-120878134.jpg",
    //           'caption': "Moving the community!",
    //           'image': "https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzQ1MzM5OTk2.LP7bL00QwBJSXPDj2DhefWhkXDMHyE9_GHas5mdFZqkg._jSmUVlSfhVvh0ohxUInt_qd6uM1o-RXniNGsr8aJ84g.PNG/000210.png?type=w740",
    //           'industry': "전기전자",
    //         },
    //         {
    //           'nickname': 'Samsung_woo',
    //           'avatar': "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg",
    //           'caption': "Moving the community!",
    //           'image': "https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzQ1MzM5OTk2.LP7bL00QwBJSXPDj2DhefWhkXDMHyE9_GHas5mdFZqkg._jSmUVlSfhVvh0ohxUInt_qd6uM1o-RXniNGsr8aJ84g.PNG/000210.png?type=w740",
    //           'industry': "전기전자",
    //         },
    //         {
    //           'nickname': 'Naver',
    //           'avatar': "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg",
    //           'caption': "Moving the community!",
    //           'image': "https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzQ1MzM5OTk2.LP7bL00QwBJSXPDj2DhefWhkXDMHyE9_GHas5mdFZqkg._jSmUVlSfhVvh0ohxUInt_qd6uM1o-RXniNGsr8aJ84g.PNG/000210.png?type=w740",
    //           'industry': "서비스업",
    //         },
    //         {
    //           'nickname': 'Naver',
    //           'avatar': "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg",
    //           'caption': "Moving the community!",
    //           'image': "https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzQ1MzM5OTk2.LP7bL00QwBJSXPDj2DhefWhkXDMHyE9_GHas5mdFZqkg._jSmUVlSfhVvh0ohxUInt_qd6uM1o-RXniNGsr8aJ84g.PNG/000210.png?type=w740",
    //           'industry': "서비스업",
    //         },
    //         {
    //           'nickname': 'Naver',
    //           'avatar': "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg",
    //           'caption': "Moving the community!",
    //           'image': "https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzQ1MzM5OTk2.LP7bL00QwBJSXPDj2DhefWhkXDMHyE9_GHas5mdFZqkg._jSmUVlSfhVvh0ohxUInt_qd6uM1o-RXniNGsr8aJ84g.PNG/000210.png?type=w740",
    //           'industry': "서비스업",
    //         },
    //         {
    //           'nickname': 'Naver',
    //           'avatar': "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg",
    //           'caption': "Moving the community!",
    //           'image': "https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzQ1MzM5OTk2.LP7bL00QwBJSXPDj2DhefWhkXDMHyE9_GHas5mdFZqkg._jSmUVlSfhVvh0ohxUInt_qd6uM1o-RXniNGsr8aJ84g.PNG/000210.png?type=w740",
    //           'industry': "서비스업",
    //         },
    //         {
    //           'nickname': 'Naver',
    //           'avatar': "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg",
    //           'caption': "Moving the community!",
    //           'image': "https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzQ1MzM5OTk2.LP7bL00QwBJSXPDj2DhefWhkXDMHyE9_GHas5mdFZqkg._jSmUVlSfhVvh0ohxUInt_qd6uM1o-RXniNGsr8aJ84g.PNG/000210.png?type=w740",
    //           'industry': "서비스업",
    //         }
    //       ],
    //     keyword: ''
    //   };

    // constructor(props) {
    //     super(props);
    //     // console.log(props.match.params.tag);
    // }
//     render(){
//         const {dataInformation} = this.props;
//         console.log('hi: '+dataInformation);
//         return (
//             <Fragment>
//                 <h2>Hi</h2><h2>Hi</h2>
//             <div className="container">
//                 <h2 className="tag">#{ this.props.match.params.tag }</h2>
//             <div className="exBody">
//                 <List dataInformation={this.state.info.filter(data => {
//                             // return data.nickname.indexOf(this.state.keyword) > -1
//                             return data.industry.toLowerCase().includes(this.props.match.params.tag.toLowerCase())
//                             // case-insensitive method
//                         })}/>
//             </div>
//             </div>
//             </Fragment>
            
//         );
//     }
// }

export default Tag;