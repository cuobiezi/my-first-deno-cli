const { args: [name] } = Deno

export const myFirst = () => {
    console.log(name)
}
