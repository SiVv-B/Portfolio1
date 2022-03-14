import React from 'react'
import './about.css'
import gomycode from '../../img/gomycode.png'

function about() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>

        <div className="a-card">
          <img
            src="https://avatars.githubusercontent.com/u/19713426?v=4"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <a
          style={{
            textDecoration: 'none',
          }}
          href="https://learn.gomycode.co/credentials/671eaeec-16e5-4574-9614-5b2b8d830aa5/GYAOARMHSYYSCALOCEDEEEONI-CN-TC-O/00003139"
        >
          <div className="a-award">
            <img src={gomycode} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">
                Full Stack Javascript Bootcamp 2022{' '}
              </h4>
              <p className="a-award-desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default about
