import React from 'react';
import { Marker } from 'react-map-gl';
import { FaMapPin } from 'react-icons/fa';

const Mark = (props) => {
	return (
		<Marker {...props}>
			<div>
				<FaMapPin style={{ color: 'red', height: '35px', width: '25px' }} />
			</div>
		</Marker>
	);
};

export default Mark;
