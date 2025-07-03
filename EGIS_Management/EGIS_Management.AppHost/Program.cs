var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.TOIMS_API>("toims-api");

builder.AddProject<Projects.bpltas_api>("bpltas-api");

builder.AddProject<Projects.rptasfaas_api>("rptasfaas-api");

builder.Build().Run();
