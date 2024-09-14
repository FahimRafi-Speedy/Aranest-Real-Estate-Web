// import { useState, useEffect, useRef } from 'react';
// import { TbGridDots } from 'react-icons/tb';

// const DropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <li className="p-2 rounded-full hover:bg-gray-200 cursor-pointer" onClick={toggleMenu}>
//         <TbGridDots size={20} />
//       </li>
//       {isOpen && (
//         <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg">
//           <ul className="text-sm">
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;
