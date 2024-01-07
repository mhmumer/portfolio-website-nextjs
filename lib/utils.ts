
 

export const validateString = (value: unknown, maxLength: number) => {
   if (!value || value!=="string" || value.length > maxLength) {
      return false
   }
   return true
}