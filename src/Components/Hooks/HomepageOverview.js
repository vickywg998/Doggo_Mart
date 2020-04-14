// import React, { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
// import { Icon, Button } from "semantic-ui-react";

// function HomepageOverview(props) {

//   const [countMap, setCountMap] = useState({});
//   const addItem = index => {
//     console.log("hey", index);
//     const newCount = (countMap[index] || 0) + 1;
//     const newCountMap = {
//       ...countMap,
//       [index]: newCount
//     };
//     setCountMap(newCountMap);

//     // setCount(prevCount => prevCount + 1);
//   };

//   const removeItem = () => setCountMap(prevCount => prevCount - 1);
//   const [loadMore, setLoadMore] = useState(true);

//   useEffect(() => {
//     getData(loadMore);
//   }, [loadMore]);


//   const getData = load => {
//     if (load) {
//       fetch("https://dog.ceo/api/breed/bulldog/boston/images/random/20")
//         .then(res => {
//           return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
//         })
//         .then(res => {
//           props.setState([...props.state, ...res.message]);
//         });
//     }
//   };


//   return (
//     <ul id="list">
   
//       {props.state.map((singlePic, index) => (
//         <Card>
//           <Card.Img
//             variant="top"
//             className="gallery-pic-sizing"
//             src={singlePic}
//             key={index}
//           />
//           <Card.Body>
//             <Card.Subtitle className="mb-2 text-muted">
//               doggo {index}
//             </Card.Subtitle>
//             <Card.Title>cool doggo</Card.Title>
//             {/* <Card.Subtitle className="mb-2 text-muted">
//               <Icon name="heart" /> 1000  want to pet it
//             </Card.Subtitle> */}
//             <Card.Text>
//               <Card.Title>
//                 <Button onClick={() => addItem(index)}>+</Button>
//                 <span>{countMap[index] || 0}</span>
//                 <Button
//                   disabled={countMap[index] < 1 || !countMap[index]}
//                   onClick={index => removeItem(index)}
//                 >
//                   -
//                 </Button>
//                 <Button className="button_primary-color pet-button">
//                   <Icon name="add to cart" /> Add to cart
//                 </Button>
//               </Card.Title>
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}

//     </ul>
//   );
// }

// export default HomepageOverview;
