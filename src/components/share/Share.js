import React from 'react'

function Share() {
  return (
    <div>
      <div className="page-share">
            <p className="page-share-desc">Share:</p>
            <a className="page-share-link" href='/'>
            <span className="sr-only">facebook</span>
            <img alt='nothing'
            src={require('../../assets/images/LinkedIn.webp')}
            style={{height:"100%",width:'100%',borderRadius:50}}
            />
            </a>
            <a className="page-share-link" href='/'>
            <span className="sr-only">twitter</span>
            <i className="icon-s-twitter">
            <img alt='nothing'
            src={require('../../assets/images/ytb.png')}
            style={{height:"100%",width:'100%',borderRadius:50}}
            />
            </i>
            </a>
            <a className="page-share-link" href='/'>
            <span className="sr-only">linkedin</span>
            <img
            src={require('../../assets/images/t.png')} alt='nothing'
            style={{height:"100%",width:'100%',borderRadius:10,objectFit:'fill'}}
            />
            </a>
            </div>
      </div>
  )
}

export default Share