import React from 'react';
import MapWithAutocomplete from './autocomplete';

const Test: React.FC = () => {
  return (
    <div>
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&loading=async&libraries=places`}
      />
      <MapWithAutocomplete />
    </div>
  );
};

export default Test;
