// const student = {
//   ask: function(question, answer) {
//     console.log(question);
//     student.responds = answer;
//       }
//     }9
//   }
// };

// const student = {
//   ask: function(question, answer) {
//     console.log(question);
//     student.responds = answer;
//     if(answer == "Stay in bed"){
//       student.ask("Do you sleep in, or go to work early to deploy the discussion question?", function(answer) {});
//     }
//   }
// };


// const student = {
//   ask: function(question, answer) {
//     console.log(question);
//     student.responds = answer;

//     switch(answer) {
//       case "Stay in bed":
//         student.ask("Do you walk or call an Uber?", function(answer) {});
//         student.responds = answer
//         break;
//         case "Walk":
//         student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//         student.responds = answer
//         break;
//         case "Uber":
//         student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//         student.responds = answer
//         break;
//         case "Stay in car":
//         student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//         student.responds = answer
//         break;
//         case "Join Him":
//         student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//         student.responds = answer
//         break;
//     // default:
//     //   "BROKEN"
      
//     }
//   }
// }

const student = {
  ask: function(question, answer) {
    console.log(question);
    student.responds = answer;
  }
};

student.ask("You are Alan Hong. You wake up at your bougie penthouse in Downtown Houston. Do you sleep in, or go to work early to deploy the discussion question?", function(answer) {
  switch(answer) {
    case "Sleep in":
      student.ask("You awaken at 8:50 with 10 minutes left to reach work. Do you walk or call an Uber?", function(answer) {
        switch(answer) {
            case "Walk":
            student.ask("It begins to rain. Do you run for the tunnels or brave the rain?", function(answer) {
              switch(answer) {
                case "Tunnels":
                  console.log("You die of dysentery. A single tear drops from his bright neon eyes.")
                    break;
                case "Brave the rain":
                  student.ask("You realize the water is cold and you start to shiver, you need to get to Flatiron ASAP. Some jerk on an electric longboard speeds across from you, splashing you in the process. He looks at you, unamused, muttering something about testing. Should you turn back now or continue walking?", function(answer) {
                    switch(answer){
                      case "Turn back":
                        console.log("A sharp pain has hit you, you grab your stomach, falling to your knees. You have died of dysentery.")
                          break;
                      case "Continue walking":
                        student.ask("Have you pushed and commited your work??!?!", function(answer) {
                          switch(answer){
                            case "Have pushed":
                              console.log("You transform into a glorious neon parrot and fly off into the sunrise, bobbing your head side to side.")
                                break;
                            case "Have not pushed":
                              console.log("You die of dysentery.")
                                break;}})
                      break;}})
                break;}})
            case "Uber":
            student.ask("Do you stay in his car, join him, or decide to walk instead?", function(answer) {
              switch(answer) {
                case "Walk":
                student.ask("It begins to rain. Do you run for the tunnels or brave the rain?", function(answer) {
                  switch(answer) {
                    case "Tunnels":
                      console.log("You die of dysentery. A single tear drops from his bright neon eyes.")
                        break;
                    case "Brave the rain":
                      student.ask("You realize the water is cold and you start to shiver, you need to get to Flatiron ASAP. Some jerk on an electric longboard speeds across from you, splashing you in the process. He looks at you, unamused, muttering something about testing. Should you turn back now or continue walking?", function(answer) {
                        switch(answer){
                          case "Turn back":
                            console.log("A sharp pain has hit you, you grab your stomach, falling to your knees. You have died of dysentery.")
                              break;
                          case "Continue walking":
                            student.ask("Have you pushed and commited your work??!?!", function(answer) {
                              switch(answer){
                                case "Have pushed":
                                  console.log("You transform into a glorious neon parrot and fly off into the sunrise, bobbing your head side to side.")
                                    break;
                                case "Have not pushed":
                                  console.log("You die of dysentery.")
                                    break;}})
                          break;}})
                    break;}})
                case "Join him":
                    console.log("You die of dysentery. You could have drank at WeWork, what else is that free beer for?")
                break;

                case "Stay in car":
                console.log("You die of dysentery. It's the crust, it got inside you fingernails. Come on man, this was totally not cool.")
                break;
            break;}})
        break;}})
        case "Deploy discussion questions":
            console.log("testing")
        break;}})

            // case "Uber":
            //   student.ask("Do you stay in his car, join him, or decide to walk instead?", function(answer) {
            //     switch(answer) {
            //         case "Walk":
            //           student.ask("Do you run for the tunnels or brave the rain?", function(answer) {
            //             switch(answer) {
            //               case "Tunnels":
            //                 console.log("You die of dysentery. A single tear drops from his bright neon eyes.")
            //                   break; 
  
//                   case "Join him":
//                   console.log("You die of dysentery. You could have drank at WeWork, what else is that free beer for?")
//                   case "Stay in his car":
//                   console.log("You die of dysentery. It's the crust, it got inside you fingernails. Come on man, this was totally not cool.")
//                   break;
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }


//                 }
//             case "Uber":
//             student.ask("Do you stay in his car, join him, or decide to walk instead?", function(answer) {
//               switch(answer) {
//                   case "Walk":
//                     student.ask("Do you run for the tunnels or brave the rain?", function(answer) {
//                       switch(answer) {
//                         case "Tunnels":
//                           console.log("You die of dysentery. A single tear drops from his bright neon eyes.")
//                           break; 
  
//                   case "Join him":
//                   console.log("You die of dysentery. You could have drank at WeWork, what else is that free beer for?")
//                   case "Stay in his car":
//                   console.log("You die of dysentery. It's the crust, it got inside you fingernails. Come on man, this was totally not cool.")
//                   break;
//             }
//           }
//           );

//             student.responds = answer
//             break;
//             case "Uber":
//             student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//             student.responds = answer
//             break;
//             case "Stay in car":
//             student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//             student.responds = answer
//             break;
//             case "Join Him":
//             student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//             student.responds = answer
//             break;
//       });
      
//       break;
//       case "Walk":
//       student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
     
//       break;
//       case "Uber":
//       student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});

//       break;
//       case "Stay in car":
//       student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
 
//       break;
//       case "Join Him":
//       student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
     
//       break;
// });



// student.ask("Staying in bed?", function(answer) {});

// switch(answer) {
//   case "Stay in bed":
// student.ask("Do you walk or call an Uber?", function(answer) {});
//     student.responds = answer
//     break;
//     case "Walk":
//     student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//     student.responds = answer
//     break;
//     case "Uber":
//     student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//     break;
//     case "Stay in car":
//     student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
//     break;
//     case "Join Him":
//     student.ask("Do you run for the tunnels or brave the rain?", function(answer) {});
  
//     break;

  
// }