let x =10;
{
    let x=20;
    {
        let x =30;
        {
            let x = 40;
            {
                let x =50;
                {

                }
                console.log('Level 5 ->',x)
            }
            console.log('Level 4 ->',x)
        }
        console.log('Level 3 ->',x)
    }
    console.log('Level 2 ->',x)
}
console.log('Level 1 ->',x);