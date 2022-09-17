
import create from 'zustand';


const useStore = create((set) => ({

isTrue: false,

getReview: () => set((state) => ({isTrue: true})) // change isTrue to true

}))

export default useStore;