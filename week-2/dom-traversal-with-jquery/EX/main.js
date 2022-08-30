const computers = []

$(".generator").on("click", function(){
    const processorId = $(this).closest("div").attr('id')
    console.log(processorId)

    const computersDataId = $(this).closest(".computer").data("id")
    console.log(computersDataId)
    computers.push({id: computersDataId})


    const busNumber = $(this).closest("div").siblings(".BUS").text()

    // const busNumber = $(this).closest(".computer").find("p").text()
    console.log(busNumber)

    console.log(computers)
})



$(".validator").on("click", function(){
    const generatorsText = $(this).closest(".computer").find(".generator").text()
    console.log(generatorsText)

    const mb = $(this).closest(".computer").find(".MB").text()
    console.log(mb)

    const qr1 = $(this).closest(".computer").find(".processor").children().eq(0).text()
    console.log(qr1)

    const qr2 = $(this).closest(".computer").find(".processor").children().eq(1).text();
    console.log(qr2)


})