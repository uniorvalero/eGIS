var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.TOIMS_API>("toims-api");

builder.AddProject<Projects.bpltas_api>("bpltas-api");

builder.Build().Run();
