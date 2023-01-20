import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader() {
  return <h1 className="text-primary">REACT COURSE</h1>
}

const subHeaderStyle={
  color:"blueviolet",
  backgroundColor:"lightgray",
}
function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course</p>
}

function Header(){
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}

function Footer(){
  return <p style={{color:"gray",backgroundColor:"black"}}>Happy Coding</p>;
}

function Students() {
  const fullName = "Eduardo Guerra"
  const programingExp = 2;

  return (
    <div className='container p-4'>
        <div className='row'>Students Enrolled</div>
        <div className='row border'>
          <div className='col-1'>
            <img src={`https://ui-avatars.com/api/?name=${fullName}`}
            className='w-100' alt='asd'>
            </img>
          </div>
          <div className='col-10'>
            {fullName}
            <br/>
            Coding Experience {programingExp}

          </div>
        </div>

    </div>
  )
}

function MainBody(){
  return (
    <div>
      <p>in this course we will learn about taskopedia</p>
      <ul>
        <li>call ben</li>
        <li>goto Walmart</li>
      </ul>
      <div>
        Enter task: <input maxLength={5} readOnly={false} placeholder='Guerra'></input>
      </div>
    </div>
  )
}

root.render(
  <>
    <Header/>
    <MainBody/>
    <Footer/>
    <Students/>
  </>
)
