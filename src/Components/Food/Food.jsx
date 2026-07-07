// import React, { useState } from "react";

// const Food = () => {
//   const [food, setFood] = useState({
//     name: "",
//     brand: "",
//     ingredients: "",
//     nutrition: "",
//     country: "",
//     manufactureDate: "",
//     expiryDate: "",
//     barcode: "",
//     qrCode: "",
//     halalStatus: "Halal",
//     reason: "",
//     islamicReference: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setFood({
//       ...food,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFood({
//         ...food,
//         image: URL.createObjectURL(file),
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(food);
//     alert("Food Added Successfully! 🎉");

//     setFood({
//       name: "",
//       brand: "",
//       ingredients: "",
//       nutrition: "",
//       country: "",
//       manufactureDate: "",
//       expiryDate: "",
//       barcode: "",
//       qrCode: "",
//       halalStatus: "Halal",
//       reason: "",
//       islamicReference: "",
//       image: null,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">

//         {/* Título Principal */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
//             Food Management
//           </h1>
//           <p className="text-sm text-slate-500">
//             Configure and log product details along with Halal compliance criteria.
//           </p>
//         </div>

//         {/* Tarjeta del Formulario */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-xl shadow-slate-200/80 rounded-2xl p-6 md:p-10 space-y-6 border border-slate-100"
//         >

//           {/* Sección 1: Información Básica */}
//           <div>
//             <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b pb-2 border-slate-100">
//               General Information
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Food Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="e.g. Organic Almond Milk"
//                   value={food.name}
//                   onChange={handleChange}
//                   className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Brand</label>
//                 <input
//                   type="text"
//                   name="brand"
//                   placeholder="e.g. PureNature"
//                   value={food.brand}
//                   onChange={handleChange}
//                   className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Sección 2: Detalles e Ingredientes */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Ingredients</label>
//               <textarea
//                 name="ingredients"
//                 rows="3"
//                 placeholder="List main ingredients..."
//                 value={food.ingredients}
//                 onChange={handleChange}
//                 className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none"
//               />
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Nutrition Facts</label>
//               <textarea
//                 name="nutrition"
//                 rows="3"
//                 placeholder="Calories, Fat, Protein..."
//                 value={food.nutrition}
//                 onChange={handleChange}
//                 className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none"
//               />
//             </div>
//           </div>

//           {/* Sección 3: Logística y Fechas */}
//           <div>
//             <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b pb-2 border-slate-100">
//               Logistics & Dates
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Country of Origin</label>
//                 <input
//                   type="text"
//                   name="country"
//                   placeholder="e.g. Canada"
//                   value={food.country}
//                   onChange={handleChange}
//                   className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Manufacture Date</label>
//                 <input
//                   type="date"
//                   name="manufactureDate"
//                   value={food.manufactureDate}
//                   onChange={handleChange}
//                   className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Expiry Date</label>
//                 <input
//                   type="date"
//                   name="expiryDate"
//                   value={food.expiryDate}
//                   onChange={handleChange}
//                   className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Identificadores Rápidos */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Barcode Number</label>
//               <input
//                 type="text"
//                 name="barcode"
//                 placeholder="123456789012"
//                 value={food.barcode}
//                 onChange={handleChange}
//                 className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
//               />
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">QR Code Link / Data</label>
//               <input
//                 type="text"
//                 name="qrCode"
//                 placeholder="HTTPS link or identifier"
//                 value={food.qrCode}
//                 onChange={handleChange}
//                 className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
//               />
//             </div>
//           </div>

//           {/* Sección 4: Estatus Halal */}
//           <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 space-y-4">
//             <h3 className="text-md font-bold text-slate-800 uppercase tracking-wide text-xs">
//               Halal Assessment
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
//               <div className="md:col-span-1">
//                 <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Status</label>
//                 <select
//                   name="halalStatus"
//                   value={food.halalStatus}
//                   onChange={handleChange}
//                   className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none font-medium text-slate-800 cursor-pointer"
//                 >
//                   <option value="Halal">✅ Halal</option>
//                   <option value="Haram">❌ Haram</option>
//                   <option value="Needs Verification">⚠ Needs Verification</option>
//                 </select>
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Reason</label>
//                 <input
//                   type="text"
//                   name="reason"
//                   placeholder="Justification for the status choice"
//                   value={food.reason}
//                   onChange={handleChange}
//                   className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Islamic Reference (Optional)</label>
//               <textarea
//                 name="islamicReference"
//                 rows="2"
//                 placeholder="Quranic verse, Hadith, or Certification authority details..."
//                 value={food.islamicReference}
//                 onChange={handleChange}
//                 className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none"
//               />
//             </div>
//           </div>

//           {/* Sección 5: Carga de Imagen Estilizada */}
//           <div>
//             <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Product Image</label>
//             <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/30 hover:bg-slate-50 transition duration-200">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImage}
//                 className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
//               />

//               {food.image && (
//                 <div className="relative shrink-0">
//                   <img
//                     src={food.image}
//                     alt="Preview"
//                     className="w-24 h-24 object-cover rounded-xl border border-slate-200 shadow-sm"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Botón de Envío */}
//           <button
//             type="submit"
//             className="w-full mt-4 bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-emerald-700 active:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition duration-200 shadow-lg shadow-emerald-600/20 text-center flex items-center justify-center gap-2 text-lg"
//           >
//             <span></span> Add New Food Item
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Food;













import React, { useState } from "react";
import { useNavigate } from "react-router";



const Food = () => {
    const [food, setFood] = useState({
        name: "",
        brand: "",
        ingredients: "",
        nutrition: "",
        country: "",
        manufactureDate: "",
        expiryDate: "",
        barcode: "",
        qrCode: "",
        halalStatus: "Halal",
        reason: "",
        islamicReference: "",
        image: null,


        
    });

    const handleChange = (e) => {
        setFood({
            ...food,
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFood({
                ...food,
                image: URL.createObjectURL(file),
            });
        }
    };

    const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();

    const oldFoods =
        JSON.parse(localStorage.getItem("foods")) || [];

    const newFood = {
        id: Date.now(),
        ...food
    };

    localStorage.setItem(
        "foods",
        JSON.stringify([
            ...oldFoods,
            newFood
        ])
    );

    alert("Food Added Successfully! 🎉");


    // Form Reset
    setFood({
        name: "",
        brand: "",
        ingredients: "",
        nutrition: "",
        country: "",
        manufactureDate: "",
        expiryDate: "",
        barcode: "",
        qrCode: "",
        halalStatus: "Halal",
        reason: "",
        islamicReference: "",
        image: null,
    });


    // File input reset করার জন্য
    document.querySelector('input[type="file"]').value = "";
    navigate("/halal-food-tracker");
};

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">

                {/* Título Principal */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                        Food Management
                    </h1>
                    <p className="text-sm text-slate-500">
                        Configure and log product details along with Halal compliance criteria.
                    </p>
                </div>

                {/* Tarjeta del Formulario */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-xl shadow-slate-200/80 rounded-2xl p-6 md:p-10 space-y-6 border border-slate-100"
                >

                    {/* Sección 1: Información Básica */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b pb-2 border-slate-100">
                            General Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Food Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Organic Almond Milk"
                                    value={food.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Brand</label>
                                <input
                                    type="text"
                                    name="brand"
                                    placeholder="e.g. PureNature"
                                    value={food.brand}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sección 2: Detalles e Ingredientes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Ingredients</label>
                            <textarea
                                name="ingredients"
                                rows="3"
                                placeholder="List main ingredients..."
                                value={food.ingredients}
                                onChange={handleChange}
                                className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Nutrition Facts</label>
                            <textarea
                                name="nutrition"
                                rows="3"
                                placeholder="Calories, Fat, Protein..."
                                value={food.nutrition}
                                onChange={handleChange}
                                className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none"
                            />
                        </div>
                    </div>

                    {/* Sección 3: Logística y Fechas */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b pb-2 border-slate-100">
                            Logistics & Dates
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Country of Origin</label>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="e.g. Canada"
                                    value={food.country}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Manufacture Date</label>
                                <input
                                    type="date"
                                    name="manufactureDate"
                                    value={food.manufactureDate}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Expiry Date</label>
                                <input
                                    type="date"
                                    name="expiryDate"
                                    value={food.expiryDate}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Identificadores Rápidos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Barcode Number</label>
                            <input
                                type="text"
                                name="barcode"
                                placeholder="123456789012"
                                value={food.barcode}
                                onChange={handleChange}
                                className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">QR Code Link / Data</label>
                            <input
                                type="text"
                                name="qrCode"
                                placeholder="HTTPS link or identifier"
                                value={food.qrCode}
                                onChange={handleChange}
                                className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
                            />
                        </div>
                    </div>

                    {/* Sección 4: Estatus Halal */}
                    <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 space-y-4">
                        <h3 className="text-md font-bold text-slate-800 uppercase tracking-wide text-xs">
                            Halal Assessment
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                            <div className="md:col-span-1">
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Status</label>
                                <select
                                    name="halalStatus"
                                    value={food.halalStatus}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none font-medium text-slate-800 cursor-pointer"
                                >
                                    <option value="Halal">✅ Halal</option>
                                    <option value="Haram">❌ Haram</option>
                                    <option value="Needs Verification">⚠ Needs Verification</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Reason</label>
                                <input
                                    type="text"
                                    name="reason"
                                    placeholder="Justification for the status choice"
                                    value={food.reason}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Islamic Reference (Optional)</label>
                            <textarea
                                name="islamicReference"
                                rows="2"
                                placeholder="Quranic verse, Hadith, or Certification authority details..."
                                value={food.islamicReference}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none"
                            />
                        </div>
                    </div>

                    {/* Sección 5: Carga de Imagen Estilizada */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Product Image</label>
                        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/30 hover:bg-slate-50 transition duration-200">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                            />

                            {food.image && (
                                <div className="relative shrink-0">
                                    <img
                                        src={food.image}
                                        alt="Preview"
                                        className="w-24 h-24 object-cover rounded-xl border border-slate-200 shadow-sm"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Botón de Envío */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-emerald-700 active:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition duration-200 shadow-lg shadow-emerald-600/20 text-center flex items-center justify-center gap-2 text-lg"
                    >
                        <span></span> Add New Food Item
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Food;