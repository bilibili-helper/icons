/**
 * Author: DrowsyFlesh
 * Create: 2022/8/14
 * Description:
 */
import React, {useCallback, useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import * as ReactIcons from 'Icons';

console.log(ReactIcons);
const iconTypeMap = {};
const beautyIconNames = Object.keys(ReactIcons).reduce((final, name) => {
    final[name] = name.replace(/[A-Z]/g, (matched, index) => {
        if (index) {
            return ' ' + matched;
        } else return matched;
    });
    const {iconType} = ReactIcons[name].defaultProps;
    if (!iconTypeMap[iconType]) {
        iconTypeMap[iconType] = [];
    }
    iconTypeMap[iconType].push(name);
    return final;
}, {});

const originNames = Object.keys(ReactIcons);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);

  .searcher {
    position: sticky;
    top: 8px;
    grid-column: 1/-1;
    margin: 8px 8px 32px;
    padding: 8px;
    width: calc(100% - 16px);
    box-sizing: border-box;
    text-align: center;
    font-size: 22px;
    z-index: 1;

  }

  .topic {
    text-align: center;
    font-size: 32px;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: center;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 80px;
  height: 110px;

  :hover {
    svg {
      transform: scale(2);
    }
  }

  .inner {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    zoom: 1.5;

    svg {
      //transition: transform .3s;
    }
  }

  .icon-name {
    margin: 0;
    font-size: 12px;
    word-break: break-word;
    text-align: center;
    zoom: 0.8;
  }
`;

export default () => {
    const [iconNames, setIconNames] = useState(originNames);

    const onChange = useCallback((e) => {
        e.persist();
        const searchText = e.target.value.trim();
        if (searchText) {
            const regexp = new RegExp(searchText, 'i');
            const matched = originNames.filter((name) => !!name.match(regexp));
            setIconNames(matched);
        } else {
            setIconNames(originNames);
        }
    }, []);

    return <Wrapper>
        <GlobalStyle/>
        <input className="searcher" onChange={onChange}/>
        {Object.entries(iconTypeMap).map(([typeName, iconNameList]) => {
            const matchedIconNameList = iconNameList.filter(name => iconNames.includes(name));
            if (!matchedIconNameList.length) return null;
            return <div className="types" key={typeName}>
                <h3 className="topic">{typeName}</h3>
                <div className="icons">
                    {matchedIconNameList.map((iconName) => {
                        const IconComponent = ReactIcons[iconName];
                        return <IconWrapper key={iconName}>
                            <div className="inner">
                                <IconComponent/>
                            </div>
                            <p className="icon-name">{beautyIconNames[iconName]}</p>
                        </IconWrapper>;
                    })}
                </div>
            </div>;
        })}
    </Wrapper>;
};
