import React from 'react'
import { Map, GoogleApiWrapper } from 'googlemaps'

const Maps = () => {
    return (
        <div>
                  <Map
            google = {this.props.google}
            zoom = {10}
            initialCenter = {
                {
                    lat: -1.292066,
                    lng: 36.821945,
                }
            }
            className='w-[1440px] h-625px] '
            />

        </div>
    )
}

export default GoogleApiWrapper({
   apiKey: "AIzaSyBIR9NTxjrwsboEbgS_xusLdKRu8xMVXl0"
})(Maps);
