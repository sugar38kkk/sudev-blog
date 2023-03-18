export const primaryFormatDate = (date: any) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }
    const newDate = new Date(date)
    return newDate.toLocaleDateString('en-US', options)
}