import React from 'react'
import { MyConsumer, channelCtxt } from './context'
/*
export function CompC(){
    return(
        <div>
            <MyConsumer>
                {
                    (user)=>{
                        return(
                            <channelCtxt.Consumer>
                                {
                                    channel=>{
                                        return(
                                            <div>
                                                User context value {user} , channel context value {channel}
                                            </div>
                                        )
                                    }
                                }
                                
                            </channelCtxt.Consumer>
                        )
                    }
                }
            </MyConsumer>
        </div>
    )
}
    */
/*
export function CompC(){
    return(
        <MyConsumer>
            {
                user=>{
                    return (
                        <div>Component C: {user}</div>
                    )
                }
            }
        </MyConsumer>
    )
}
    */

export function CompC(){

    return(
        <MyConsumer>
            {
                user=>{
                    return(
                        <div>Component C: {user}</div>
                    )
                }
            }
        </MyConsumer>
    )
}