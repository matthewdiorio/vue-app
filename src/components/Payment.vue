<template>
    <div class="max-w-xl mx-auto">
                             <button class="border border-transparent bg-black text-white hover:border-gray-900 hover:bg-white hover:text-black flex flex-row justify-center items-center py-3 rounded w-full">
                                <div class="mr-1">
                                    <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                                            fill="currentColor"
                                        />
                                        <path d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <p>Pay</p>
                                </div>
                            </button>

                            <div class="flex flex-row justify-center items-center my-6">
                                <hr class="border w-full" />
                                <p class="flex flex-shrink-0 px-5 text-gray-800">or pay with card</p>
                                <hr class="border w-full" />
                            </div>
                        </div>
<form class="max-w-xl mx-auto">
  <div class="mb-4">
    <label class="mt-8 font-medium leading-4 text-gray-800">Contact</label>
    <input class="form-input mt-1 block w-full rounded" type="email" name="email" id="email" placeholder="Email" required>
    <input class="form-input mt-1 block w-full rounded" type="tel" name="phone" id="phone" placeholder="Phone" required>
  </div>

  <div class="mb-4">
    <label class="mt-8 font-medium leading-4 text-gray-800">Shipping</label>
    <input class="form-input mt-1 block w-full rounded" type="text" name="street" id="street" placeholder="Street address" required>
    <input class="form-input mt-1 block w-full rounded" type="text" name="city" id="city" placeholder="City" required>
    <div class="flex-row flex gap-1">
      <input class="form-input mt-1 block w-full rounded" type="text" name="state" id="state" placeholder="State/Province" required>
      <input class="form-input mt-1 block w-full rounded" type="text" name="zip" id="zip" placeholder="Postal code" required>
    </div>
    <select class="form-select mt-1 block w-full text-gray-500 rounded" name="country" id="country" required>
         <option value="" disabled selected>Select Country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="MX">Mexico</option>

</select>
  </div>
  <div class="mb-4">
    <label class="mt-8 font-medium leading-4 text-gray-800">Card details</label>
    <input class="form-input mt-1 block w-full rounded" type="text" name="card" id="card" placeholder="Credit Card Number" required>
    <input class="form-input mt-1 block w-full rounded" type="text" name="name" id="name" placeholder="Name on Card" required>
    <div class="flex-row flex gap-1">
     <input class="form-input mt-1 block w-full rounded" type="text" name="expiry" id="expiry" placeholder="MM/YY" required>
     <input class="form-input mt-1 block w-full rounded" type="text" name="cvv" id="cvv" placeholder="CVV" required>
    </div>
  </div>
  <button class="border border-transparent bg-gray-700 text-white hover:border-gray-900 hover:bg-white  hover:text-black flex flex-row justify-center items-center py-3 rounded w-full" type="submit">Place Order</button>
</form>

</template>