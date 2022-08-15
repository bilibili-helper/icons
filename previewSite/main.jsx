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
  }

  * {
    font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }
`;

const Wrapper = styled.div`
  --icon-size: 15px;
  --gap-size: 15px;
  margin-bottom: 64px;

  .searcher {
    position: fixed;
    top: 16px;
    left: 0;
    grid-column: 1/-1;
    margin: 32px 40px;
    padding: 8px;
    width: 300px;
    height: 32px;
    box-sizing: border-box;
    font-size: 20px;
    z-index: 1;
  }

  .types {
    padding-top: 128px;
    display: flex;
    grid-template-columns: repeat(auto-fit, 100%);

    &.hide {
      display: none;
    }
  }

  .type {
    margin: 0 32px;
    //width: 300px;
    //min-width: 300px;
  }

  .topic {
    margin: 0px 0px 16px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    user-select: none;
  }

  .icons {
    display: grid;
    //grid-template-columns: repeat(auto-fit, 50px);

    grid-template-columns: repeat(4, var(--icon-size));
    grid-gap: var(--gap-size);
    justify-content: center;
    margin: 0 auto;
  }

  .tips {
    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 8px 0;
    width: 300px;
    line-height: 15px;
    background-color: white;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    transition: opacity .3s;

    &.show-tip {
      opacity: 1;
    }

    .copied-icon {
      margin-left: 8px;
      display: inline-block;
      vertical-align: bottom;
      width: 15px;
      height: 15px;
    }
  }

  .searched {
    padding-top: 160px;
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
  padding: 10px;
  min-width: max-content;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;

  :hover {
    background-color: antiquewhite;

    .icon-name {
      visibility: visible;
    }
  }

  :active {
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
      //transition: transform .3s;
    }
  }

  .icon-name {
    position: absolute;
    bottom: 100%;
    margin: 8px -64px 4px;
    width: calc(100% + 87px + 15px);
    font-size: 12px;
    word-break: break-word;
    text-align: center;
    //background-color: white;
    //z-index: 1;
    zoom: 0.85;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
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

  :hover {
    background-color: antiquewhite;

    .icon-name {
      visibility: visible;
    }
  }

  :active {
    background-color: blanchedalmond;
  }

  .inner {
    margin-right: 12px;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    //zoom: 1.5;

    svg {
      pointer-events: none;
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
        const text = Array.from(e.target.childNodes.values())[0].outerHTML;
        setCopiedSVG(text);
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.top = '-100000px';
        textarea.style.left = '0';
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
                console.log(type, list);
                return <div className="type" key={type}>
                    <h3 className="topic">{type}</h3>
                    <div className="icons">
                        {list.map((iconName) => {
                            if (typeof iconName === 'string') {
                                const IconComponent = ReactIcons[iconName];
                                console.log(IconComponent, iconName);
                                return <IconBlockWrapper key={iconName} onClick={onClick}>
                                    <div className="inner">
                                        <IconComponent/>
                                    </div>
                                    <p className="icon-name">{beautyIconNames[iconName]}</p>
                                </IconBlockWrapper>;
                            } else if (iconName.name && iconName.size instanceof Array && iconName.size.length === 2) {
                                const {name, size} = iconName;
                                const IconComponent = ReactIcons[name];
                                console.log(iconName, IconComponent);
                                return <IconBlockWrapper key={name} onClick={onClick} style={{
                                    gridColumnStart: 1,
                                    gridColumnEnd: ((size[0] - 15) / 30),
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
                return <IconLineWrapper key={iconName} onClick={onClick}>
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
