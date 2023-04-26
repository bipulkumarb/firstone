import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor:  props.mode === 'dark' ? '#042743' : 'white'
    }

    return (
        <div classNameName='container' style={myStyle}>
            <h2 className='mx-3'>About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Tour Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Turnbull Text Editor gives way to analyze your text quickely and efficiently. Be it word count or characters.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={myStyle}>
                            Turnbull Text Editor is free character tool that provides instant charcter count and word count statistics for a gives text.
                            It reports the number of words and charcters. Thus it is suitavle for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software words in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. 
                            It suits to count characters in facebook, blog, books, excel document, pdf document, essy, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
                            <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
            </div> */}
        </div>
    )
}
