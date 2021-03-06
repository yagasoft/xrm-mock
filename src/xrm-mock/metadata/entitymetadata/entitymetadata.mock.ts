export class EntityMetadataMock implements Xrm.Metadata.EntityMetadata {
  public ActivityTypeMask: number;
  public Attributes: Xrm.Collection.StringIndexableItemCollection<Xrm.Metadata.AttributeMetadata>;
  public AutoRouteToOwnerQueue: boolean;
  public CanEnableSyncToExternalSearchIndex: boolean;
  public CanBeInManyToMany: boolean;
  public CanBePrimaryEntityInRelationship: boolean;
  public CanBeRelatedEntityInRelationship: boolean;
  public CanCreateAttributes: boolean;
  public CanCreateCharts: boolean;
  public CanCreateForms: boolean;
  public CanCreateViews: boolean;
  public CanModifyAdditionalSettings: boolean;
  public CanTriggerWorkflow: boolean;
  public Description: Xrm.Metadata.Label;
  public DisplayCollectionName: Xrm.Metadata.Label;
  public DisplayName: Xrm.Metadata.Label;
  public EntityColor: string;
  public EntitySetName: string;
  public IconLargeName: string;
  public IconMediumName: string;
  public IconSmallName: string;
  public IsActivity: boolean;
  public IsActivityParty: boolean;
  public IsAuditEnabled: boolean;
  public IsAvailableOffline: boolean;
  public IsBPFEntity: boolean;
  public IsChildEntity: boolean;
  public IsConnectionsEnabled: boolean;
  public IsCustomEntity: boolean;
  public IsCustomizable: boolean;
  public IsDocumentManagementEnabled: boolean;
  public IsDuplicateDetectionEnabled: boolean;
  public IsEnabledForCharts: boolean;
  public IsOneNotIntegrationEnabled: boolean;
  public IsOptimisitcConcurrencyEnabled: boolean;
  public IsQuickCreateEnabled: boolean;
  public IsImportable: boolean;
  public IsIntersect: boolean;
  public IsMailMergeEnabled: boolean;
  public IsManaged: boolean;
  public IsMappable: boolean;
  public IsReadingPaneEnabled: boolean;
  public IsRenameable: boolean;
  public IsStateModelAware: boolean;
  public IsValidForAdvancedFind: boolean;
  public IsValidForQueue: boolean;
  public IsVisibleInMobileClient: boolean;
  public LogicalCollectionName: string;
  public LogicalName: string;
  public ObjectTypeCode: number;
  public OwnershipTypeCode: number;
  public PrimaryIdAttribute: string;
  public PrimaryNameAttribute: string;
  public RecurrenceBaseEntityLogicalName: string;
  public PrimaryImageAttribute: string;

  constructor(components: IEntityMetadataComponents) {
    this.ActivityTypeMask = components.ActivityTypeMask;
    this.Attributes = components.Attributes;
    this.AutoRouteToOwnerQueue = components.AutoRouteToOwnerQueue;
    this.CanEnableSyncToExternalSearchIndex = components.CanEnableSyncToExternalSearchIndex;
    this.CanBeInManyToMany = components.CanBeInManyToMany;
    this.CanBePrimaryEntityInRelationship = components.CanBePrimaryEntityInRelationship;
    this.CanBeRelatedEntityInRelationship = components.CanBeRelatedEntityInRelationship;
    this.CanCreateAttributes = components.CanCreateAttributes;
    this.CanCreateCharts = components.CanCreateCharts;
    this.CanCreateForms = components.CanCreateForms;
    this.CanCreateViews = components.CanCreateViews;
    this.CanModifyAdditionalSettings = components.CanModifyAdditionalSettings;
    this.CanTriggerWorkflow = components.CanTriggerWorkflow;
    this.Description = components.Description;
    this.DisplayCollectionName = components.DisplayCollectionName;
    this.DisplayName = components.DisplayName;
    this.EntityColor = components.EntityColor;
    this.EntitySetName = components.EntitySetName;
    this.IconLargeName = components.IconLargeName;
    this.IconMediumName = components.IconMediumName;
    this.IconSmallName = components.IconSmallName;
    this.IsActivity = components.IsActivity;
    this.IsActivityParty = components.IsActivityParty;
    this.IsAuditEnabled = components.IsAuditEnabled;
    this.IsAvailableOffline = components.IsAvailableOffline;
    this.IsBPFEntity = components.IsBPFEntity;
    this.IsChildEntity = components.IsChildEntity;
    this.IsConnectionsEnabled = components.IsConnectionsEnabled;
    this.IsCustomEntity = components.IsCustomEntity;
    this.IsCustomizable = components.IsCustomizable;
    this.IsDocumentManagementEnabled = components.IsDocumentManagementEnabled;
    this.IsDuplicateDetectionEnabled = components.IsDuplicateDetectionEnabled;
    this.IsEnabledForCharts = components.IsEnabledForCharts;
    this.IsOneNotIntegrationEnabled = components.IsOneNotIntegrationEnabled;
    this.IsOptimisitcConcurrencyEnabled = components.IsOptimisitcConcurrencyEnabled;
    this.IsQuickCreateEnabled = components.IsQuickCreateEnabled;
    this.IsImportable = components.IsImportable;
    this.IsIntersect = components.IsIntersect;
    this.IsMailMergeEnabled = components.IsMailMergeEnabled;
    this.IsManaged = components.IsManaged;
    this.IsMappable = components.IsMappable;
    this.IsReadingPaneEnabled = components.IsReadingPaneEnabled;
    this.IsRenameable = components.IsRenameable;
    this.IsStateModelAware = components.IsStateModelAware;
    this.IsValidForAdvancedFind = components.IsValidForAdvancedFind;
    this.IsValidForQueue = components.IsValidForQueue;
    this.IsVisibleInMobileClient = components.IsVisibleInMobileClient;
    this.LogicalCollectionName = components.LogicalCollectionName;
    this.LogicalName = components.LogicalName;
    this.ObjectTypeCode = components.ObjectTypeCode;
    this.OwnershipTypeCode = components.OwnershipTypeCode;
    this.PrimaryIdAttribute = components.PrimaryIdAttribute;
    this.PrimaryNameAttribute = components.PrimaryNameAttribute;
    this.RecurrenceBaseEntityLogicalName = components.RecurrenceBaseEntityLogicalName;
    this.PrimaryImageAttribute = components.PrimaryImageAttribute;
  }
}

export interface IEntityMetadataComponents {
  ActivityTypeMask: number;
  Attributes: Xrm.Collection.StringIndexableItemCollection<Xrm.Metadata.AttributeMetadata>;
  AutoRouteToOwnerQueue: boolean;
  CanEnableSyncToExternalSearchIndex: boolean;
  CanBeInManyToMany: boolean;
  CanBePrimaryEntityInRelationship: boolean;
  CanBeRelatedEntityInRelationship: boolean;
  CanCreateAttributes: boolean;
  CanCreateCharts: boolean;
  CanCreateForms: boolean;
  CanCreateViews: boolean;
  CanModifyAdditionalSettings: boolean;
  CanTriggerWorkflow: boolean;
  Description: Xrm.Metadata.Label;
  DisplayCollectionName: Xrm.Metadata.Label;
  DisplayName: Xrm.Metadata.Label;
  EntityColor: string;
  EntitySetName: string;
  IconLargeName: string;
  IconMediumName: string;
  IconSmallName: string;
  IsActivity: boolean;
  IsActivityParty: boolean;
  IsAuditEnabled: boolean;
  IsAvailableOffline: boolean;
  IsBPFEntity: boolean;
  IsChildEntity: boolean;
  IsConnectionsEnabled: boolean;
  IsCustomEntity: boolean;
  IsCustomizable: boolean;
  IsDocumentManagementEnabled: boolean;
  IsDuplicateDetectionEnabled: boolean;
  IsEnabledForCharts: boolean;
  IsOneNotIntegrationEnabled: boolean;
  IsOptimisitcConcurrencyEnabled: boolean;
  IsQuickCreateEnabled: boolean;
  IsImportable: boolean;
  IsIntersect: boolean;
  IsMailMergeEnabled: boolean;
  IsManaged: boolean;
  IsMappable: boolean;
  IsReadingPaneEnabled: boolean;
  IsRenameable: boolean;
  IsStateModelAware: boolean;
  IsValidForAdvancedFind: boolean;
  IsValidForQueue: boolean;
  IsVisibleInMobileClient: boolean;
  LogicalCollectionName: string;
  LogicalName: string;
  ObjectTypeCode: number;
  OwnershipTypeCode: number;
  PrimaryIdAttribute: string;
  PrimaryNameAttribute: string;
  RecurrenceBaseEntityLogicalName: string;
  PrimaryImageAttribute: string;
}
