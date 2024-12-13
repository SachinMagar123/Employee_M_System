export default function Table(){
   return <div class="flex justify-center items-center min-h-screen bg-gray-100">
   <table class="table-auto border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
     <thead class="bg-gray-200">
       <tr>
         <th class="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Name</th>
         <th class="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Phone</th>
         <th class="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Email</th>
         <th class="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Action</th>
       </tr>
     </thead>
     <tbody>
       <tr class="hover:bg-gray-100">
         <td class="border border-gray-300 px-4 py-2 text-gray-600">Bam</td>
         <td class="border border-gray-300 px-4 py-2 text-gray-600">0000</td>
         <td class="border border-gray-300 px-4 py-2 text-gray-600">@gmail.com</td>
         <td class="border border-gray-300 px-4 py-2 text-gray-600">
            <a class="hover:text-blue-600">Edit </a>
            <a class="hover:text-blue-600">   Delete</a>
         </td>
       </tr>
     </tbody>
   </table>
 </div>
 
}
