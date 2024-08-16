/**
 * Author: DrowsyFlesh
 * Create: 2022/8/14
 * Description:
 */
import React, {useCallback, useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import * as ReactIcons from 'Icons';
import IconMap from './iconMap';
import classnames from 'classnames';

const iconTypeMap = {};
const beautyIconNames = Object.keys(ReactIcons).reduce((final, name) => {
    final[name] = name.replace(/[A-Z]/g, (matched, index) => {
        if (index) {
            return ' ' + matched;
        } else return matched;
    }).slice(0, -5);
    const {iconType} = ReactIcons[name].defaultProps;
    if (!iconTypeMap[iconType]) {
        iconTypeMap[iconType] = [];
    }
    iconTypeMap[iconType].push(name);
    return final;
}, {});

const originNames = Object.keys(ReactIcons);

const originSearchNames = originNames.map(name => name.slice(0, -4));

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    --icon-size: 15px;
    --gap-size: 30px;
  }

  * {
    font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }
`;

const Wrapper = styled.div`
  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
  //bottom: 0;
  //overflow: auto;
  //margin-bottom: 64px;
  
  .searcher {
    position: sticky;
    top: 32px;
    left: 32px;
    grid-column: 1/-1;
    margin: 32px 32px;
    padding: 8px;
    width: 300px;
    height: 32px;
    box-sizing: border-box;
    font-size: 20px;
    z-index: 2;
    
    &::placeholder {
      font-size: 16px;
    }
  }
  
  .types {
    //padding-top: 128px;
    display: flex;
    grid-template-columns: repeat(auto-fit, 100%);
    margin-bottom: var(--gap-size);
    
    &.hide {
      display: none;
    }
  }
  
  .type {
    padding: 0 32px;
    border-right: 1px solid #eee;
    //width: 300px;
    //min-width: 300px;
    
    :last-of-type {
      border: none;
    }
  }
  
  .topic {
    position: sticky;
    top: 0;
    margin: 16px 0px 16px;
    padding: 8px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    background-color: #fff;
    user-select: none;
    white-space: nowrap;
    z-index: 1;
  }
  
  .icons {
    display: grid;
    //grid-template-columns: repeat(auto-fit, 50px);
    
    grid-template-columns: repeat(4, calc(var(--icon-size)));
    grid-gap: var(--gap-size);
    justify-content: center;
    margin: 0 auto;
  }
  
  .tips {
    position: fixed;
    top: 38px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 8px 0;
    width: 300px;
    line-height: 35px;
    background-color: white;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    transition: opacity .3s;
    border-radius: 3px;
    box-shadow: 0 0 6px #eee;
    z-index: 100;
    
    &.show-tip {
      opacity: 1;
    }
    
    .copied-icon {
      margin-left: 8px;
      padding: 10px;
      display: inline-block;
      vertical-align: bottom;
      height: 15px;
      line-height: 15px;
      border-radius: 2px;
      background-color: antiquewhite;
    }
  }
  
  .searched {
    margin: 0 auto;
    //padding-top: 160px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-content: center;
    grid-gap: var(--gap-size);
    
    &.hide {
      display: none;
    }
    
    .no-icons {
      font-weight: 300;
    }
  }
`;
const IconBlockWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  //padding: 10px;
  min-width: max-content;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: calc(200% / -4);
      left: calc(200% / -4);
      width: calc(200%);
      height: calc(200%);
      background-color: antiquewhite;
      border-radius: 2px;
      z-index: -1;
      //pointer-events: none;
    }

    .icon-name {
      visibility: visible;
      background-color: transparent;
    }
  }

  &:active {
    background-color: blanchedalmond;
  }

  .inner {
    width: max-content;
    min-width: var(--icon-size);
    height: var(--icon-size);
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    //zoom: 1.5;

    svg {
      pointer-events: none;
      width: calc(var(--icon-size) * (var(--sizeX) * 2 - 1));
      height: calc(var(--icon-size) * (var(--sizeY) * 2 - 1));
      //transition: transform .3s;
    }
  }

  .icon-name {
    position: absolute;
    bottom: 100%;
    margin: 8px -64px 2px;
    width: calc(100% + 87px + 15px);
    font-size: 12px;
    word-break: break-word;
    text-align: center;
    //background-color: white;
    //z-index: 1;
    //zoom: 0.85;
    transform: scale(0.8);
    transform-origin: bottom;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
  }
`;
const IconLineWrapper = styled.div`
  position: relative;
  display: flex;
  //flex-direction: column;
  //justify-content: flex-start;
  //align-items: center;
  padding: 12px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  cursor: pointer;
  //transition: border-color .3s;

  &:hover {
    background-color: antiquewhite;

    .icon-name {
      visibility: visible;
    }
  }

  &:active {
    background-color: blanchedalmond;
  }

  .inner {
    margin-right: 12px;
    width: fit-content;
    height: 15px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    //zoom: 1.5;

    svg {
      pointer-events: none;
      width: calc(var(--icon-size) * (var(--sizeX) * 2 - 1));
      height: calc(var(--icon-size) * (var(--sizeY) * 2 - 1));
      //transition: transform .3s;
    }
  }

  .icon-name {
    margin: 0;
    line-height: 15px;
    font-size: 14px;
  }
`;

let tipTimer;

export default () => {
    const [iconNames, setIconNames] = useState(originNames);
    const [showTip, setShowTip] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [copiedSVG, setCopiedSVG] = useState(null);

    const onChange = useCallback((e) => {
        e.persist();
        const searchText = e.target.value.trim().replace(/\W/g, '');
        if (searchText) {
            setSearchText(searchText);
            const regexp = new RegExp(`(\\W?${searchText})`, 'i');
            const matched = originSearchNames.filter((name) => name.match(regexp));
            if (matched.length) {
                setSearchResult(matched);
                setShowSearchResult(true);
            } else {
                setSearchResult([]);
                setShowSearchResult(true);
            }
        } else {
            setShowSearchResult(false);
            setIconNames(originNames);
        }
    }, []);

    const onClick = useCallback((e) => {
        let {target} = e;
        if (target.classList.contains('icon-name')) {
            target = target.parentElement;
        }
        const text = target.querySelector('svg').outerHTML;
        setCopiedSVG(text);
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.top = '50%';
        textarea.style.left = '50%';
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            const successful = document.execCommand('copy');
            textarea.remove();
            if (successful) {
                setShowTip(true);
                clearTimeout(tipTimer);
                tipTimer = setTimeout(() => {
                    setShowTip(false);
                }, 2000);
            }
            return successful;
        } catch (err) {
            return false;
        }
    }, []);

    return <Wrapper>
        <GlobalStyle/>
        <input className="searcher" onChange={onChange} placeholder="Enter icon name to search"/>
        <div className={classnames({types: true, hide: showSearchResult})}>
            {IconMap.map(({type, list}) => {
                if (!list.length) return null;
                return <div className="type" key={type}>
                    <h3 className="topic">{type}</h3>
                    <div className="icons">
                        {list.map((iconName) => {
                            if (typeof iconName === 'string') {
                                const IconComponent = ReactIcons[iconName];
                                return <IconBlockWrapper
                                    key={iconName}
                                    onClick={onClick}
                                    style={{
                                        '--sizeX': Math.ceil(1 / 30),
                                        '--sizeY': Math.ceil(1 / 30),
                                    }}
                                >
                                    <div className="inner">
                                        <IconComponent/>
                                    </div>
                                    <p className="icon-name">{beautyIconNames[iconName]}</p>
                                </IconBlockWrapper>;
                            } else if (iconName.name && iconName.size instanceof Array && iconName.size.length === 2) {
                                const {name, size} = iconName;
                                const IconComponent = ReactIcons[name];
                                return <IconBlockWrapper key={name} onClick={onClick} style={{
                                    //gridColumnStart: 1,
                                    gridColumn: `span ${Math.ceil(size[0] / 30)}`,
                                    '--sizeX': Math.ceil(size[0] / 30),
                                    '--sizeY': Math.ceil(size[1] / 30),
                                }}>
                                    <div className="inner">
                                        <IconComponent/>
                                    </div>
                                    <p className="icon-name">{beautyIconNames[name]}</p>
                                </IconBlockWrapper>;
                            }
                        })}
                    </div>
                </div>;
            })}
        </div>
        <div className={classnames({searched: true, hide: !showSearchResult})}>
            {searchResult.length ? searchResult.map((iconName) => {
                const IconComponent = ReactIcons[iconName + 'Icon'];
                return <IconLineWrapper key={iconName} className="icon-line" onClick={onClick}>
                    <div className="inner">
                        <IconComponent/>
                    </div>
                    <p className="icon-name">{beautyIconNames[iconName + 'Icon']}</p>
                </IconLineWrapper>;
            }) : <span className="no-icons">No icons for <b>{searchText}</b></span>}
        </div>
        <div className={classnames({tips: true, 'show-tip': showTip})}>
            SVG copied to clipboard <span className="copied-icon" dangerouslySetInnerHTML={{__html: copiedSVG}}/>
        </div>
    </Wrapper>;
};
