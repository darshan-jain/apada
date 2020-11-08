import React from 'react';
import { Container, Header,Icon, Segment,Image, Item,Button,Feed } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import "semantic-ui-css/semantic.min.css";




const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 40,
  },

 
  
});

export default function ThirdTab() {
  const classes = useStyles();

  return (
    <div>
    <Container fluid>
    <Image src='https://www.linkpicture.com/q/Calamity-Conscience-_-Contribute_1.png' size='medium' centered />

<h2 size='large'style={{color:'black',fontFamily :'Montserrat'}} >Safety Guidelines</h2>

 <Segment raised style={{background:'linear-gradient(to bottom right, #bc6c25 , #fec89a'}} >
 <Feed >
        <Feed.Event>
        <Icon name='globe' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="#" style={{color:'black',fontFamily :'Montserrat',fontSize:'18px'}}>Earthquakes</a>  
            </Feed.Summary><text style={{fontFamily :'Poppins'}}>
            If you are in a car, pull over and stop. <br></br>Set your parking brake.<br></br>
If you are in bed, turn face down and cover your head and neck with a pillow.
If you are outdoors, stay outdoors away from buildings.<br></br>
Do not get in a doorway.
Do not run outside. </text>
          </Feed.Content>
        
        </Feed.Event>
        </Feed>
 </Segment>
 <Segment raised  style={{background:'linear-gradient(to bottom right, #ff7900 , #ffc971'}}>
 <Feed > 
        <Feed.Event>
        <Icon name='fire' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="#" style={{color:'black',fontFamily :'Montserrat',fontSize:'18px'}}>Fire Accidents</a>  
            </Feed.Summary><text style={{fontFamily :'Poppins'}}>
            Get down, get low, get out – smoke is poisonous, get underneath it on your hands and knees, and crawl to the nearest safe exit.<br></br>
Shut the doors behind you to stop the spread of fire and smoke.
Shout Fire! Fire! Fire! to warn others.
Ensure everyone is out of the building.
Get out and stay out – never go back inside.
Go to your safe meeting place – such as your letterbox.,</text>

          </Feed.Content>
        
        </Feed.Event>
        </Feed>
 </Segment>
 <Segment raised  style={{background:'linear-gradient(to bottom right, #00b4d8 , #caf0f8'}}> 
 <Feed>
        <Feed.Event>
        <Icon name='cloud' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="#" style={{color:'black',fontFamily :'Montserrat',fontSize:'18px'}}>Floods & Rain</a>  
            </Feed.Summary><text style={{fontFamily :'Poppins'}}>
            Gather emergency supplies.
Listen to your local radio or television station for updates.
Prepare an emergency food and water supply. Store at least 1 gallon of water per day for each person and each pet. Store at least a 3-day supply.
Bring in outdoor possessions  or tie them down securely.
If evacuation appears necessary: turn off all utilities at the main power switch and close the main gas valve.
Avoid driving through flooded areas and standing water.</text>
          </Feed.Content>
        
        </Feed.Event>
        </Feed>
 </Segment>

 <h2 size='large'style={{color:'black',fontFamily :'Montserrat'}}>About Apada</h2>
      <br></br>
      <p as='h3'style={{fontFamily :'Poppins'}} >
      Apada is an app which shows us the data related to the affected area in the form of a graph and displays the current news of that particular area.
       The main motive behind this app is to prevent disasters like the Lebanon Fire Accident, California WildFire etc. and to help people understand the aftermath of these calamities and how they can contribute towards the cause.
      </p>
<br></br>


  <Segment.Group raised style={{background:'linear-gradient(to bottom right, #7c98b3 , #cee5f2',fontFamily :'Poppins'}} >
    <Segment style={{background:'linear-gradient(to bottom right, #7c98b3 , #cee5f2',fontFamily :'Poppins'}}> <Icon fitted name='hand point right'></Icon> Real Time Disaster Awareness </Segment>
    <Segment style={{background:'linear-gradient(to bottom right, #7c98b3 , #cee5f2',fontFamily :'Poppins'}}><Icon fitted name='hand point right'></Icon> Emergency Helpline Nos on fingertips</Segment>
    <Segment style={{background:'linear-gradient(to bottom right, #7c98b3 , #cee5f2',fontFamily :'Poppins'}}><Icon fitted name='hand point right'></Icon> Calamity, Conscience, Contribute</Segment>
  </Segment.Group>
    </Container>
<br></br>
    <Item.Group>
    <Header as='h4'style={{color:'black',fontFamily :'Montserrat'}}>Developed with  <Icon fitted name='handshake outline' ></Icon> </Header>

    <Segment raised style={{background:'linear-gradient(to bottom right, #f9b4ed , #adcfff' }}>
    <Item>
      <Item.Image size='small' src='https://www.linkpicture.com/q/darshan.png' />
      <Item.Content>
        <Item.Header style={{fontFamily :'Montserrat',color:'#33415'}}>Darshan Jain</Item.Header>
        <Item.Meta style={{fontFamily :'Poppins'}}>MERN Stack Developer | Entrepreneur | Tech Evangelist</Item.Meta>
        <br></br>
        <Item.Description>
        <a href='https://github.com/darshan-jain'><Button icon color='black' > <Icon name='github' /> </Button></a>
        <a href='https://www.instagram.com/dar_tion._/'><Button icon color='instagram'> <Icon name='instagram' /> </Button></a>
        <a href='https://www.linkedin.com/in/darshan-j-236793121/'><Button icon color='linkedin'> <Icon name='linkedin' /> </Button></a>
        </Item.Description>   
      </Item.Content>
    </Item>
    </Segment>

<Segment raised style={{background:'linear-gradient(to bottom right, #f9b4ed , #adcfff' }}>
    <Item>
      <Item.Image size='small' src="https://www.linkpicture.com/q/Raswanth.png" />
      <Item.Content>
        <Item.Header  style={{fontFamily :'Montserrat', color:'#33415c'}}>Raswanth Rajangam</Item.Header>
        <Item.Meta style={{fontFamily :'Poppins'}}>Creative Developer | UX Designer</Item.Meta>
        <br></br>
        <Item.Description>
         <div> 
     <a href='https://github.com/Raswanth8'><Button icon color='black'> <Icon name='github' /> </Button></a>
     <a href='https://www.instagram.com/__raswanth__8/'><Button icon color='instagram'> <Icon name='instagram' /> </Button></a>
     <a href='https://www.linkedin.com/in/raswanth-rajangam-4564a41aa/'><Button icon color='linkedin'> <Icon name='linkedin' /> </Button></a>
      </div>
        </Item.Description>  
      </Item.Content>
    </Item>
    </Segment>
  </Item.Group>
    
      <Segment raised style={{background:'linear-gradient(to bottom right, #f9b4ed , #adcfff' }}>
    <Item>
      <Item.Image size='small' src="https://www.linkpicture.com/q/circle-cropped-8_1.png" />
      <Item.Content>
        <Item.Header style={{fontFamily :'Montserrat',color:'#33415'}}>Chaitanya Vadlamannati</Item.Header>
        <Item.Meta style={{fontFamily :'Poppins'}}>ML Developer</Item.Meta>
        <br></br>
        <Item.Description>
        <a href=''><Button icon color='black' > <Icon name='github' /> </Button></a>
        <a href='https://www.instagram.com/deal_looser_2121/'><Button icon color='instagram'> <Icon name='instagram' /> </Button></a>
        <a href='https://www.linkedin.com/in/chaitanya-vadlamannati-340a88190/'><Button icon color='linkedin'> <Icon name='linkedin' /> </Button></a>
        </Item.Description>   
      </Item.Content>
    </Item>
    </Segment>

  </div>
  );
}
