import React, { useContext, useState } from "react"
import Loading from "../components/loading/Loading"
import { LogsContext } from "../context/LogsContext"

function CallLogs(props) {
  const { posts, loaded, offset, setOffset, setLoaded, email, totalCount } =
    useContext(LogsContext)
  console.log(posts)
  const [popUp, setPopUp] = useState(false)
  const [note, setNote] = useState([])
  const handleNotesClick = (id) => {
    const [newNotes] = posts.filter((data) => {
      return data.id === id
    })
    setNote(newNotes.notes)

    if (newNotes.notes.length !== 0) {
      setPopUp(true)
    }
  }
  return (
    <div className='calls'>
      <div className='container'>
        <div className='calls-data'>
          <div className={popUp ? "popNotes" : "popNotes popOff"}>
            <div className='popNotesConatiner'>
              <div className='popHeader'>
                <div></div>
                <div>
                  <svg
                    onClick={() => {
                      setPopUp(false)
                    }}
                    className='crossSign'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M1.70711 0.706956C1.31658 0.316431 0.683417 0.316431 0.292893 0.706956C-0.0976312 1.09748 -0.0976309 1.73065 0.292893 2.12117L7.57114 9.39941L0.707107 16.2634C0.316582 16.654 0.316582 17.2871 0.707107 17.6777C1.09763 18.0682 1.7308 18.0682 2.12132 17.6777L8.98535 10.8136L15.8492 17.6775C16.2398 18.068 16.8729 18.068 17.2635 17.6775C17.654 17.287 17.654 16.6538 17.2635 16.2633L10.3996 9.39941L17.6777 2.12131C18.0682 1.73079 18.0682 1.09762 17.6777 0.707096C17.2871 0.316572 16.654 0.316572 16.2635 0.707097L8.98535 7.9852L1.70711 0.706956Z'
                      fill='#373737'
                    />
                  </svg>
                </div>
              </div>
              <div className='containerPop'>
                {note.map((i) => {
                  return (
                    <div>
                      <h2>{i.content}</h2>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='headings'>
            <div className='porfileUserFront'>
              <div className='porfileUser'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                  <path
                    fill='rgb(39, 39, 39)'
                    d='M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z'
                  />
                </svg>
              </div>
              <h4 className='emailText'>{email}</h4>
            </div>
            <div className='mt-2 c-w float-end'>
              <input
                className='offsetNumber'
                type='text'
                placeholder={offset + 1}
                onChange={(event) => {
                  setOffset(parseInt(event.target.value - 1))
                  setLoaded(false)
                }}
              />
              {" to " + (offset + 10) + " of "} {totalCount}
            </div>
          </div>
          {!loaded && (
            <div className='loader'>
              <Loading />
            </div>
          )}
          {offset >= totalCount || offset < 0 ? (
            <h4> Opps! It Exceed from total Number </h4>
          ) : (
            ""
          )}
          {loaded && (
            <div className='table-main'>
              {posts.map((items) => {
                const { duration } = items
                let hour = Math.floor(duration / 3600)
                let mint = Math.floor((duration % 3600) / 60)
                let sec = Math.floor((duration % 3600) % 60)

                var hDisplay = hour < 10 ? "0" + hour + "hr: " : hour + "hr: "
                var mDisplay = mint < 10 ? "0" + mint + "mt: " : mint + "mt: "
                var sDisplay = sec < 10 ? "0" + sec + "sc" : sec + "sc "
                return (
                  <div className='tableRow'>
                    <div className='tableSection'>
                      <div className='tableSectionColumn'>
                        <div className='label'>From:</div>
                        <div>{items.from}</div>
                      </div>
                      <div className='tableSectionColumn'>
                        <div className='label'>To:</div>
                        <div>{items.to}</div>
                      </div>
                      <div className='tableSectionColumn'>
                        <div className='label'>Via:</div>
                        <div>{items.via}</div>
                      </div>
                    </div>
                    <div className='tableSectionDD'>
                      <div className='tableSectionColumn'>
                        <div>
                          {hDisplay}
                          {mDisplay}
                          {sDisplay}
                        </div>
                      </div>
                      <div className='tableSectionColumn'>
                        <div className='label'>{items.direction}</div>
                      </div>
                      <div className='tableSectionColumn'>
                        <div className='label'>{items.call_type}</div>
                      </div>
                    </div>
                    <div className='tableSectionBtn'>
                      <svg
                        onClick={() => {
                          handleNotesClick(items.id)
                        }}
                        width='55'
                        height='55'
                        viewBox='0 0 55 55'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <rect width='55' height='55' rx='4' fill='white' />
                        <path
                          d='M33.9821 32.2143H44V12.7679C44 11.7882 43.2118 11 42.2321 11H12.7679C11.7882 11 11 11.7882 11 12.7679V42.2321C11 43.2118 11.7882 44 12.7679 44H32.2143V33.9821C32.2143 33.0098 33.0098 32.2143 33.9821 32.2143ZM43.4844 36.2656L36.2656 43.4844C35.9342 43.8159 35.4848 44 35.0134 44H34.5714V34.5714H44V35.0208C44 35.4848 43.8159 35.9342 43.4844 36.2656Z'
                          fill='black'
                        />
                        <line
                          x1='17.5996'
                          y1='17.1001'
                          x2='37.3996'
                          y2='17.1001'
                          stroke='white'
                        />
                        <line
                          x1='17.5996'
                          y1='21.5'
                          x2='37.3996'
                          y2='21.5'
                          stroke='white'
                        />
                        <line
                          x1='17.5996'
                          y1='25.8999'
                          x2='37.3996'
                          y2='25.8999'
                          stroke='white'
                        />
                        <path d='M17.5996 29.7002H28.5996' stroke='white' />
                      </svg>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <br />
        </div>
      </div>
    </div>
  )
}

export default CallLogs
