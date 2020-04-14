// import React, { Component } from "react";
// import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";
// import util from "../util";

// export default class Basket extends Component {
//   render() {
//     const { cartItems } = this.props;
//     return (
//       <Alert variant="secondary">
//         {cartItems.length === 0 ? (
//           "Doggo Basket is empty"
//         ) : (
//           <div>
//             {" "}
//            <h3> You have {cartItems.length} different{" "}
//             {cartItems.length > 1 ? "doggos" : "doggo"} to pet in the Doggo
//             Basket.</h3>
//           </div>
//         )}
//         {cartItems.length > 0 && (
//           <div>
//             <ul>
//               {cartItems.map((item) => (
//                 <li>
//                   <b>{item.title}</b>
//                   X {item.count} = {item.price * item.count}
//                   <Button className="button_primary-color" onClick={(e) => this.props.handleRemoveFromCart(e, item)}>
//                     X
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//            Total:  {util.formatCurrency(cartItems.reduce((a,c) => a + c.price+c.count,0 ))}
//           </div>
//         )}
//       </Alert>
//     );
//   }
// }
