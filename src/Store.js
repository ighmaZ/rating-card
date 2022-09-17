
import create from 'zustand';


const useStore = create((set) => ({

isTrue: false,
selectedNumber: 0,             //  selected button number 


getReview: () => set((state) => ({isTrue: true})), // change isTrue to true
setNum: (number) => set((state) => ({selectedNumber: number})), // change isTrue to true
}))

export default useStore;