import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from 'react-router';

export default function Venues() {
  const navigate=useNavigate();
  const notify = () => toast.success("Success");
  return (
    <ImageList sx={{ width: 1000, height: 850,marginLeft:'16%' }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" sx={{ textAlign:'center',fontSize:'6ch'}}>VENUES</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            // src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                onClick={()=>{navigate("/user")}}
              >
                <LocalMallIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjB2ZW51ZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Grand Manor Events',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnQlMjB2ZW51ZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Regal Gardens Venue',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50JTIwdmVudWV8ZW58MHx8MHx8fDA%3D',
    title: 'Urban Fusion Events',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnQlMjB2ZW51ZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Opulent Occasions Hall',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beach Serenity Venue',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/1578317/pexels-photo-1578317.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Country Haven Hall',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/7119176/pexels-photo-7119176.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tranquil Treetop Pavilion',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.pexels.com/photos/16120160/pexels-photo-16120160/free-photo-of-table-setting-in-wedding-reception-venue.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Fireside Gatherings',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.pexels.com/photos/14305972/pexels-photo-14305972.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cultural Nexus Center',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/14203521/pexels-photo-14203521.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Palette Play Studios',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.pexels.com/photos/13644238/pexels-photo-13644238.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'World Harmony Halls',
    author: '@peterlaster',
  },
  {
    img: 'https://images.pexels.com/photos/6544769/pexels-photo-6544769.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'VibeHub Resort',
    author: '@southside_customs',
    cols: 2,
  },
];
