import React from 'react';
import Mark from './Mark';

const Shape = ({ shape, zone_name }) => {
	return shape.coordinates.map((coord) => {
		console.log(coord);
		const [longitude, latitude] = coord;
		return (
			<Mark
				key={`mark_${zone_name}`}
				longitude={longitude}
				latitude={latitude}
			/>
		);
	});
};

export default Shape;
